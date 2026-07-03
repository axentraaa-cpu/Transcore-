import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { resend } from '@/lib/resend'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const data = Object.fromEntries(formData.entries())

    const fileData: Record<string, string> = {}
    const fileKeys = ['mc_authority', 'w9', 'coi', 'noa']

    // 🔥 Upload Files to Supabase
    for (const key of fileKeys) {
      const file = formData.get(key) as File | null

      if (file && file.size > 0) {
        const safeName = file.name.replace(/\s+/g, '-')
        const fileName = `${Date.now()}-${data.mc_dot}-${key}-${safeName}`

        const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
          .from('carrier-docs')
          .upload(fileName, file, {
            contentType: file.type,
            upsert: true
          })

        if (uploadError) {
          console.error(`Upload error (${key}):`, uploadError.message)
          continue
        }

        const { data: publicUrlData } = supabaseAdmin.storage
          .from('carrier-docs')
          .getPublicUrl(uploadData.path)

        fileData[`${key}_url`] = publicUrlData.publicUrl
      }
    }

    // 🔥 Save to Database
    const { error: dbError } = await supabaseAdmin.from('carriers').insert([
      {
        first_name: String(data.first_name),
        last_name: String(data.last_name),
        email: String(data.email),
        phone: String(data.phone),
        mc_dot: String(data.mc_dot),
        truck_type: String(data.truck_type),
        service_needed: String(data.service_needed),
        message: String(data.message),
        ...fileData
      }
    ])

    if (dbError) {
      console.error('DB Error:', dbError.message)
      throw new Error('Database insert failed')
    }

    // 🔥 Email HTML (with document links)
    const emailHTML = `
      <h2>New Carrier Application</h2>

      <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
      <p><strong>Truck Type:</strong> ${data.truck_type}</p>
      <p><strong>MC/DOT:</strong> ${data.mc_dot}</p>
      <p><strong>Service:</strong> ${data.service_needed}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>

      <h3>Documents:</h3>
      <ul>
        ${fileData.mc_authority_url ? `<li><a href="${fileData.mc_authority_url}" target="_blank">MC Authority</a></li>` : ''}
        ${fileData.coi_url ? `<li><a href="${fileData.coi_url}" target="_blank">COI</a></li>` : ''}
        ${fileData.w9_url ? `<li><a href="${fileData.w9_url}" target="_blank">W9 Form</a></li>` : ''}
        ${fileData.noa_url ? `<li><a href="${fileData.noa_url}" target="_blank">NOA</a></li>` : ''}
      </ul>

      <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
    `

    // 🔥 Send ONLY to company
    try {
      await resend.emails.send({
        from: 'Transcore<onboarding@resend.dev>',
        to: ['axentraaa@gmail.com'], // ⚠️ yahan apni real company email lagao
        subject: `New Carrier Signup: ${data.mc_dot}`,
        html: emailHTML
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

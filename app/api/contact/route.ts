// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("API Call Received...");

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!process.env.RESEND_API_KEY) {
      console.error("API Key Missing");
      return NextResponse.json({ success: false, message: "Server API Key Missing" });
    }

    // app/api/contact/route.ts
// ... baaki code same rahega ...

    const data = await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: ['axentraaa@gmail.com'], // <--- YEHAN CHANGE KARO
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
      `,
    });

// ... baaki code same rahega ...

    console.log("Email Sent Successfully:", data);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    // <--- ANY KO HATAO, UNKNOWN LAGAO

    console.error("DETAILED ERROR:", error);

    let errorMessage = "Unknown Error";

    // Check karein ke error Error object hai ya nahi
    if (error instanceof Error) {
        errorMessage = error.message;
    }

    return NextResponse.json({
      success: false,
      error: errorMessage
    });
  }
}

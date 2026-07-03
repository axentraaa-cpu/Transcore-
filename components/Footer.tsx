import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link
            href="/"
            className="mb-4 inline-flex items-center text-2xl font-bold tracking-tight text-white"
          >
            <span className="text-accent-500">Trans</span>
            <span className="text-white">core</span>
          </Link>
          <p className="text-gray-400 text-sm mb-6">
            Your trusted partner in freight dispatch. Keeping your trucks loaded
            and your business moving forward.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-gray-400 hover:bg-accent-500 hover:text-white cursor-pointer transition-colors text-sm font-bold">
              in
            </div>
            <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-gray-400 hover:bg-accent-500 hover:text-white cursor-pointer transition-colors text-sm font-bold">
              fb
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href="/about"
                className="hover:text-accent-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-accent-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-accent-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                href="/services/dry-van"
                className="hover:text-accent-400 transition-colors"
              >
                Dry Van
              </Link>
            </li>
            <li>
              <Link
                href="/services/reefer"
                className="hover:text-accent-400 transition-colors"
              >
                Reefer
              </Link>
            </li>
            <li>
              <Link
                href="/services/flatbed-step-deck"
                className="hover:text-accent-400 transition-colors"
              >
                Flatbed
              </Link>
            </li>
            <li>
              <Link
                href="/services/hotshot"
                className="hover:text-accent-400 transition-colors"
              >
                Hotshot
              </Link>
            </li>
            <li>
              <Link
                href="/services/box-truck"
                className="hover:text-accent-400 transition-colors"
              >
                Box Truck
              </Link>
            </li>
            <li>
              <Link
                href="/services/power-only"
                className="hover:text-accent-400 transition-colors"
              >
                Power Only
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent-500 shrink-0" /> (417)
              233-4790
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent-500 shrink-0" />{" "}
              sales@transcore.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent-500 shrink-0 mt-0.5" />{" "}
              123 Logistics Ave, Suite 100
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Transcore. All rights reserved. |{" "}
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy
        </Link>{" "}
        |{" "}
        <Link href="/terms" className="hover:text-white transition-colors">
          Terms
        </Link>
      </div>
    </footer>
  );
}

import { MapPin, Phone, Mail, MailOpen} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 w-full overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-orange-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gray-500 opacity-10 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-26">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full p-2 shadow">
                <img
                  src="/images/logo.png"
                  alt="Prasan Vidya Bala Mandir School Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-lg font-bold text-white leading-tight">
                Prasan Vidya Bala Mandir
              </h1>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Nurturing students for Global Readiness with Indian Roots.
            </p>

            {/* Follow Us */}
            <div>
              <p className="text-sm font-semibold text-white mb-2">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-blue-800 hover:bg-blue-500 p-2 rounded-full transition"
                >
                  <MailOpen className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.instagram.com/prasanvidyabalamandir?igsh=MTdvbWptdmNrMHAycA=="
                  aria-label="Instagram"
                  className="bg-gradient-to-tl from-[#feda75] via-[#d62976] to-[#962fbf] hover:bg-gradient-to-br from-pink-500 to-violet-500 p-2 rounded-full transition"
                >
                  <MailOpen className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.youtube.com/@prasanvidyabalamandir"
                  aria-label="YouTube"
                  className="bg-red-800  hover:bg-red-500 p-2 rounded-full transition"
                >
                  <MailOpen className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://in.linkedin.com/company/pvbalamandir"
                  aria-label="Linkedin"
                  className="bg-blue-800 hover:bg-blue-600 p-2 rounded-full transition"
                >
                  <MailOpen className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 border-l-4 border-orange-500 pl-3">
              Quick Links
            </h2>


            <ul className="space-y-2 text-sm">
              {[
                { name: "About", path: "/about" },
                { name: "Faculty", path: "/faculty" },
                { name: "Gallery", path: "/gallery" },
                { name: "Admission", path: "/admission" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-orange-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 border-l-4 border-orange-500 pl-3">
              Contact Us
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-orange-400 flex-shrink-0" />
                <span>
                  No: 98 & 99, Periya Maniyakara St, Chengalpattu, Tamil Nadu
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-orange-400 flex-shrink-0" />
                <span>
                  044 2742 2602 / +91-9841087708
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-orange-400 flex-shrink-0" />
                <span className="break-words">
                  prasanvidyabalamandir@gmail.com
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-neutral-800 py-4 text-center">
        <p className="text-[10px] sm:text-xs text-gray-500">
          © 2026 Prasan Vidya Bala Mandir. All rights reserved. Developed by Alumni of PVM 24-25 Batch -- Ritesh and Rishanth
        </p>
      </div>

    </footer>
  );
}

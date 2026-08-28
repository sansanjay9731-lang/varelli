import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "@/components/ui/icons";

const solutions = [
  { name: "Home Automation", href: "/home-automation" },
  { name: "Private Cinema", href: "/private-cinema" },
  { name: "Home Theatre", href: "/home-theatre" },
  { name: "Fresh Air Ventilation", href: "/fresh-air-ventilation" },
  { name: "Central Vacuum", href: "/central-vacuum" },
  { name: "Smart Security", href: "/home-security" },
  { name: "Home Networking", href: "/home-networking" },
];

const locations = [
  { name: "Bangalore", href: "/home-automation/bangalore" },
  { name: "Mumbai", href: "/home-automation/mumbai" },
  { name: "Delhi NCR", href: "/home-automation/delhi-ncr" },
  { name: "Hyderabad", href: "/home-automation/hyderabad" },
  { name: "Chennai", href: "/home-automation/chennai" },
  { name: "Pune", href: "/home-automation/pune" },
];

const resources = [
  { name: "Architects & Designers", href: "/architects" },
  { name: "Completed Residences", href: "/residences" },
  { name: "The Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040407] border-t border-[var(--border)]">
      <div className="border-b border-[var(--border)]">
        <div className="container-varelli py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="badge-mono mb-3">Begin Your Residence</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] max-w-lg leading-tight">
              Ready to design your intelligent living environment?
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-gold px-8 py-4 text-sm font-semibold rounded-full font-body whitespace-nowrap shrink-0"
          >
            Begin Your Residence
          </Link>
        </div>
      </div>

      <div className="container-varelli py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="font-display text-lg font-bold tracking-[0.08em] text-[var(--text-primary)]">
                VARELLI
              </span>
            </Link>
            <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Designing and engineering intelligent residential environments for luxury villas, estates and private residences across India.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/varelliindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VARELLI on Instagram"
                className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/varelli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VARELLI on LinkedIn"
                className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://youtube.com/@varelli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VARELLI on YouTube"
                className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="badge-mono mb-4">Solutions</p>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="badge-mono mb-4">Locations</p>
            <ul className="space-y-2.5">
              {locations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="badge-mono mb-4">Experience Centers</p>
            <ul className="space-y-2.5 mb-6 text-xs text-[var(--text-secondary)] font-body">
              <li><strong className="text-white">Bangalore:</strong> Lavelle Road & Indiranagar</li>
              <li><strong className="text-white">Mumbai:</strong> Worli Sea Face Studio</li>
              <li><strong className="text-white">Delhi NCR:</strong> Golf Course Rd, Gurugram</li>
              <li><strong className="text-white">Hyderabad:</strong> Jubilee Hills Rd No. 36</li>
            </ul>
            <p className="badge-mono mb-2">Direct Enquiries</p>
            <a
              href="https://wa.me/919900000000?text=Hello%20VARELLI%2C%20I%20would%20like%20to%20connect%20with%20a%20Senior%20Systems%20Architect."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 hover:underline font-mono block mb-1"
            >
              WhatsApp: +91 99000 00000
            </a>
            <a
              href="mailto:studio@varelli.in"
              className="text-xs text-[var(--text-secondary)] hover:text-[var(--gold)] font-mono transition-colors duration-200 block"
            >
              studio@varelli.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-varelli py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)] font-body">
            © {new Date().getFullYear()} VARELLI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

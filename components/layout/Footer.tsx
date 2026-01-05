import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const logo = "/assets/images/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Brands", path: "/brands" },
  { name: "Logistics", path: "/distribution" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const brands = [
  { name: "Suntop", path: "/brands#suntop" },
  { name: "Suncola", path: "/brands#suncola" },
  { name: "Sunquick", path: "/brands#sunquick" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/binzagr-co-ro-ltd/", color: "hover:bg-[#0077b5]" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/binzagrcoro", color: "hover:bg-[#1DA1F2]" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/binzagrcoro", color: "hover:bg-[#E4405F]" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/binzagrcoro", color: "hover:bg-[#1877F2]" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/binzagrcoro", color: "hover:bg-[#FF0000]" },
];

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Logo & Description */}
        <div className="max-w-md mb-16">
          <img
            src={logo}
            alt="Binzagr Coro"
            className="h-8 w-auto brightness-0 invert opacity-90 mb-6"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            A Legacy of Collaboration
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Established in 1976, Binzagr Coro is a strategic joint venture between Binzagr Company and CO-RO A/S,
            bringing world-class beverages to the Kingdom and beyond.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/70 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded text-sm font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Our Brands
            </h4>
            <ul className="space-y-4">
              {brands.map((brand) => (
                <li key={brand.path}>
                  <Link
                    href={brand.path}
                    className="text-white/70 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded text-sm font-medium transition-colors duration-300"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Al Mahjar, Industrial Area South<br />
                  Jeddah 21411, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+966126369626"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  +966 12 636 9626
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:info@binzagrcoro.com"
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  info@binzagrcoro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-12" />

        {/* Social Icons - Centered */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Binzagr Coro. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded text-xs transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded text-xs transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link"
import { Instagram, Linkedin, Mail, Heart } from "lucide-react"
import { TiktokIcon } from "./ui/tiktok-icon"

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/username", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/username", label: "LinkedIn" },
  { icon: TiktokIcon, href: "https://tiktok.com/@username", label: "TikTok" },
  { icon: Mail, href: "mailto:email@example.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link 
            href="#home" 
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Alfi<span className="text-primary">.H</span>
          </Link>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            &copy; {new Date().getFullYear()} Alfiansyah Huseiny
          </p>
        </div>
      </div>
    </footer>
  )
}

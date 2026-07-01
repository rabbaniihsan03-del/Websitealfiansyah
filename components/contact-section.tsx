import { Mail, Phone, Instagram, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { TiktokIcon } from "./ui/tiktok-icon"

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 856-0368-1038",
    href: "https://wa.me/6285603681038",
    color: "hover:text-green-400"
  },
  {
    icon: Mail,
    label: "Email",
    value: "alfiansyah.h265@gmail.com",
    href: "mailto:alfiansyah.h265@gmail.com",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fiihsy26_",
    href: "https://instagram.com/fiihsy26_",
    color: "hover:text-pink-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Nama Lengkap",
    href: "https://linkedin.com/in/username",
    color: "hover:text-blue-500"
  },
  {
    icon: TiktokIcon,
    label: "TikTok",
    value: "@oqwunsy",
    href: "https://www.tiktok.com/@oqwunsy",
    color: "hover:text-black dark:hover:text-white"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hubungi saya untuk diskusi lebih lanjut mengenai peluang kerja atau kolaborasi
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <p className="text-lg md:text-xl text-foreground font-medium mb-2 text-pretty">
              &ldquo;Terbuka untuk peluang kerja dan kolaborasi profesional.&rdquo;
            </p>
            <p className="text-muted-foreground">
              Jangan ragu untuk menghubungi saya melalui salah satu kontak di bawah ini.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-background rounded-xl border border-border p-5 text-center hover:border-primary/30 transition-all duration-300 ${contact.color}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-1">
                {contact.label}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {contact.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

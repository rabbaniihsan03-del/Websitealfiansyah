import Image from "next/image"
import Link from "next/link"
import { Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary text-sm md:text-base font-medium mb-3 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              Selamat Datang di Portfolio Saya
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up opacity-0 animation-delay-100 text-balance" style={{ animationFillMode: 'forwards' }}>
              Alfiansyah Huseiny
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
              Animator Specialist & Quality Control Checker
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0 animation-delay-300 text-pretty" style={{ animationFillMode: 'forwards' }}>
              Individu yang kreatif, disiplin, dan mudah beradaptasi dengan pengalaman di bidang animator serta punya pengalaman kerja sebagai Checker. saya punya semangat belajar tinggi dan siap memberikan kontribusi terbaik dalam lingkungan kerja profesional.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
              <Link
                href="/cv.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download CV
                </Link>
                <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 bg-card">
                {/* Replace with your profile image */}
                <Image
                  src="/pp1.png"
                  alt="Profile Photo"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

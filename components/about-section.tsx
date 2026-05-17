import { User, Target, Briefcase, Heart } from "lucide-react"

const aboutItems = [
  {
    icon: User,
    title: "Background",
    description: "Lulusan SMKN 2 Cimahi jurusan Animasi dengan pengalaman di bidang customer service, quality control, dan dunia kreatif. Memiliki kemampuan komunikasi yang baik, teliti dalam bekerja, serta terbiasa memberikan solusi efektif dan pelayanan terbaik kepada pelanggan. Berpengalaman sebagai animator, editor, dan livestreamer yang membantu membentuk kreativitas serta kemampuan adaptasi di berbagai bidang pekerjaan."
  },
  {
    icon: Briefcase,
    title: "Pengalaman",
    description: "Memiliki pengalaman kerja sebagai Checker (Quality Control) di PT. Nusareka Prima Engineering dengan tugas melakukan inspeksi bahan baku, pemantauan proses produksi, dan pengecekan kualitas produk. Selain itu memiliki pengalaman dalam koordinasi tim, pelayanan pelanggan, serta pengelolaan bisnis keluarga secara profesional dan bertanggung jawab."
  },
  {
    icon: Heart,
    title: "Karakter Kerja",
    description: "Disiplin, detail-oriented, komunikatif, dan mampu bekerja secara individu maupun dalam tim. Memiliki semangat belajar tinggi, cepat beradaptasi dengan lingkungan kerja baru, serta mampu bekerja di bawah tekanan dengan tanggung jawab penuh."
  },
  {
    icon: Target,
    title: "Tujuan Karir",
    description: "Mengembangkan kemampuan profesional di bidang animator , quality control, maupun bidang kerja lainnya. Siap berkontribusi secara maksimal, mempelajari hal baru, dan berkembang bersama perusahaan untuk mencapai hasil kerja yang berkualitas dan berdampak positif."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mengenal lebih dekat tentang latar belakang, pengalaman, dan aspirasi profesional saya
          </p>
        </div>

        {/* About Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

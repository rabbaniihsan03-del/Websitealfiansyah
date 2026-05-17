import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "PT. Nusareka Prima Engineering",
    position: "Checker",
    period: "2024 – 2025",
    location: "Karawang, Indonesia",
    descriptions: [
      " Inspeksi Bahan baku yang akan digunakan untuk memastikan kualitas dan kesesuaian dengan standar yang ditetapkan",
      "Pemantauan proses produksi. Melakukan pengecekan secara berkala untuk memastikan bahwa proses produksi berjalan sesuai dengan standar kualitas yang ditetapkan",
      "Pengecekan Produk sudah jadi. Melakukan pemeriksaan akhir pada produk jadi untuk memastikan bahwa produk memenuhi standar kualitas sebelum dikirim ke pelanggan",
      "Berkoordinasi dengan pekerja yang lain. Memberikan umpan balik dan rekomendasi untuk perbaikan proses produksi jika ditemukan masalah kualitas",
      "Menganalisis dan mengelola data. Mencatat hasil inspeksi dan menggunakan data tersebut untuk mengidentifikasi tren atau masalah yang mungkin muncul dalam proses produksi"
    ]
  },
  {
    company: "Bisnis Keluarga",
    position: "Customer Service & Store Operations",
    period: "2021 – 2024",
    location: "Cimahi, Indonesia",
    descriptions: [
      "Bertanggung jawab dalam manajemen dan bisnis miliki keluarga dengan omset 3 juta per bulan",
      " Memberikan pelayan maksimal > 20 orang pembeli di toko tiap hari menjamin kepuasan pelanggan",
      "Mengorganisir letak penyimpanan >20 produk toko demi menciptakan visual yang menarik dan memudahkan pelanggan dalam mencari produk"
    ]
  },
  {
    company: "SMKN 2 Cimahi",
    position: "Praktik Kerja Industri (PKL) ANIMATOR",
    period: "Agustus 2020 – November 2020",
    location: "SMKN 2 Cimahi",
    descriptions: [
      "Membuat Pemodelan/desain karakter 3D & 2D",
      "Membuat konten visual untuk social media",
      "Melakukan Pengawasan dan Pengecekan terhadap tugas yang dikerjakan oleh tim,memastikan hasil yang berkualitas dan sesuai dengan tenggat waktu"
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Perjalanan karir profesional dan pengalaman kerja saya
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 pb-10 last:pb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] md:left-[15px] top-8 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
                <Building2 className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
              </div>

              {/* Content Card */}
              <div className="bg-background rounded-xl border border-border p-5 md:p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

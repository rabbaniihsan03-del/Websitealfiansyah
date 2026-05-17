"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Sertifikat Pengalaman Kerja - Cheker",
    issuer: "PT. Nusareka Prima Engineering",
    date: "2023",
    image: "/certificates/cert-8.png",
    description: "Sertifikat pengalaman kerja sebagai Checker 3 di PT. Nusareka Prima Engineering pada proyek Fabrication & Piping Installation – Indah Kiat Karawang Project. Bertanggung jawab dalam proses inspeksi dan pengecekan kualitas pekerjaan sesuai standar proyek."
  },
  {
    id: 2,
    title: "Pelatihan Pembuatan Konten Sosial Media",
    issuer: "Disnakertrans Provinsi Jawa Barat",
    date: "2025",
    image: "/certificates/cert-9.png",
    description: "dengan materi pelatihan 1. pengantar konten kreator 2. niche dan konten pillar 3. teknik copy writing dasar 4. fotografi 5. videografi"
  },
]

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section id="certificates" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Sertifikasi dan pelatihan yang telah saya ikuti untuk pengembangan kompetensi
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 text-left"
            >
              {/* Certificate Image */}
              <div className="aspect-[4/3] relative bg-secondary overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-foreground text-sm font-medium flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Lihat Detail
                  </span>
                </div>
              </div>
              
              {/* Certificate Info */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-foreground truncate">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-card rounded-xl border border-border max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">
                  {selectedCert.title}
                </h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-4">
                <div className="aspect-[4/3] relative bg-secondary rounded-lg overflow-hidden mb-4">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-primary font-medium">{selectedCert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{selectedCert.date}</p>
                  <p className="text-muted-foreground text-sm">{selectedCert.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

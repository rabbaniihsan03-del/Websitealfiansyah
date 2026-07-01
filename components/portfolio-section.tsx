"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ExternalLink, Folder } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Sleep Mug",
    category: "3D Blender",
    image: "/portfolio/1.jpeg",
    description: "Desain mug tidur dengan desain unik",
    link: "https://drive.google.com/drive/folders/1PniMW1v0DWv8BEsefqP4cX24U-y2_R2L"
  },
  {
    id: 2,
    title: "Futuristic Helmet",
    category: "3D Blender",
    image: "/portfolio/2.jpeg",
    description: "Desain helm futuristik untuk proyek animasi",
    link: "https://drive.google.com/drive/folders/1PniMW1v0DWv8BEsefqP4cX24U-y2_R2L"
  }
]

const categories = ["Semua", "3D Blender"]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = selectedCategory === "Semua"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Koleksi karya dan proyek yang telah saya kerjakan
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 text-left"
            >
              <div className="aspect-[4/3] relative bg-secondary overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
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

              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-foreground truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-xl border border-border max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="p-4">
                <div className="aspect-[4/3] relative bg-secondary rounded-lg overflow-hidden mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                  
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buka di Google Drive
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

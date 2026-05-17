import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

const educations = [
  {
    institution: "SMK Negeri 2 Cimahi",
    degree: "Animasi",
    period: "2019 - 2021",
    description: "Mempelajari Pemodelan/desain karakter 3D & 2D. ",
    skills: ["3D Modeling", "3D Texturing", " 3D Lighting"],
    achievements: [
      "Berpengalaman di bidang 3D animasi - ahli menggunakan blender"
    ]
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Latar belakang pendidikan dan pengembangan akademik saya
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl border border-border p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg w-fit">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 text-pretty">
                {edu.description}
              </p>

              {/* Skills Learned */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Skills yang Dipelajari
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Pencapaian
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {achievement}
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

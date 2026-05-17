import { 
  Palette, 
  Layout, 
  FileText, 
  CheckCircle2, 
  MessageSquare, 
  Users, 
  Eye 
} from "lucide-react"

const skills = [
  { name: "3D Blender", icon: Palette, level: 95 },
  { name: "Video Editing (CapCut & DaVinci Resolve)", icon: Layout, level: 90 },
  { name: "Microsoft Office", icon: FileText, level: 88 },
  { name: "Quality Checking", icon: CheckCircle2, level: 92 },
  { name: "Communication", icon: MessageSquare, level: 90 },
  { name: "Teamwork", icon: Users, level: 90 },
  { name: "Livestreaming & Content Creation", icon: Eye, level: 95 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Kemampuan teknis hard skill dan soft skill yang telah saya kembangkan
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-medium text-foreground mb-2">
                {skill.name}
              </h3>
              {/* Skill Level Bar */}
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-1 block">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

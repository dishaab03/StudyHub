import { ArrowRight, LucideIcon } from 'lucide-react'

interface Subject {
  id: number
  name: string
  icon: LucideIcon
  description: string
  color: string
  count: number
}

interface SubjectCardProps {
  subject: Subject
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const Icon = subject.icon

  const colorClasses = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    accent: 'bg-accent/10 text-accent border-accent/20'
  }

  const colorClass = colorClasses[subject.color as keyof typeof colorClasses]

  return (
    <button className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {subject.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {subject.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-border">
          <span className="text-xs font-medium text-muted-foreground">
            {subject.count} materials
          </span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  )
}

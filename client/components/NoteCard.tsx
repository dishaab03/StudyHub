import { Download, Star, FileText } from 'lucide-react'

interface Note {
  id: number
  title: string
  subject: string
  author: string
  description: string
  pages: number
  downloads: number
  rating: number
  category: string
  thumbnail: string
}

interface NoteCardProps {
  note: Note
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Thumbnail */}
      <div className={`h-40 ${note.thumbnail} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <FileText className="w-12 h-12 text-white opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        {/* Meta */}
        <div className="flex items-center justify-between text-xs">
          <div className="space-y-1">
            <p className="text-muted-foreground">{note.subject}</p>
            <p className="font-medium text-foreground">{note.author}</p>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {note.category}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2 flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {note.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {note.description}
          </p>
        </div>

        {/* Rating & Pages */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">{note.rating}</span>
          </div>
          <span>•</span>
          <span>{note.pages} pages</span>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Download className="w-3 h-3" />
            <span>{note.downloads.toLocaleString()}</span>
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>
      </div>
    </div>
  )
}

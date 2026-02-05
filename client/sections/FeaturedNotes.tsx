import { FileText, Download, Star } from 'lucide-react'
import NoteCard from '../components/NoteCard'

const FEATURED_NOTES = [
  {
    id: 1,
    title: 'Calculus Fundamentals',
    subject: 'Mathematics',
    author: 'Dr. Sarah Chen',
    description: 'Complete guide to limits, derivatives, and integrals with solved examples.',
    pages: 48,
    downloads: 2543,
    rating: 4.8,
    category: 'Advanced',
    thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Organic Chemistry Reactions',
    subject: 'Science',
    author: 'Prof. James Wilson',
    description: 'Comprehensive notes on organic reactions, mechanisms, and synthesis strategies.',
    pages: 62,
    downloads: 1898,
    rating: 4.9,
    category: 'Advanced',
    thumbnail: 'bg-gradient-to-br from-purple-400 to-purple-600'
  },
  {
    id: 3,
    title: 'Web Development with React',
    subject: 'Programming',
    author: 'Alex Rodriguez',
    description: 'Modern React patterns, hooks, and best practices for building scalable apps.',
    pages: 71,
    downloads: 3124,
    rating: 4.7,
    category: 'Intermediate',
    thumbnail: 'bg-gradient-to-br from-green-400 to-green-600'
  },
  {
    id: 4,
    title: 'World War II Timeline',
    subject: 'History',
    author: 'Emily Thompson',
    description: 'Detailed timeline and analysis of major events, key figures, and turning points.',
    pages: 45,
    downloads: 1654,
    rating: 4.6,
    category: 'Intermediate',
    thumbnail: 'bg-gradient-to-br from-amber-400 to-amber-600'
  },
  {
    id: 5,
    title: 'Spanish Verb Conjugations',
    subject: 'Languages',
    author: 'Maria Garcia',
    description: 'Complete reference guide for regular and irregular verb conjugations.',
    pages: 38,
    downloads: 2201,
    rating: 4.8,
    category: 'Beginner',
    thumbnail: 'bg-gradient-to-br from-pink-400 to-pink-600'
  },
  {
    id: 6,
    title: 'Physics Mechanics Guide',
    subject: 'Science',
    author: 'Dr. Robert Lee',
    description: 'Essential concepts in classical mechanics with problem-solving approaches.',
    pages: 56,
    downloads: 2876,
    rating: 4.9,
    category: 'Intermediate',
    thumbnail: 'bg-gradient-to-br from-cyan-400 to-cyan-600'
  }
]

export default function FeaturedNotes() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="mb-4">Featured Study Materials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Curated collection of the most popular and highly-rated study notes from our community.
            </p>
          </div>
          <button className="hidden sm:inline-flex px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
            View All
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {FEATURED_NOTES.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="sm:hidden">
          <button className="w-full px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
            View All Materials
          </button>
        </div>
      </div>
    </section>
  )
}

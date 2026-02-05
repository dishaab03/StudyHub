import { CheckCircle, ArrowRight } from 'lucide-react'

const FEATURES = [
  'Organized notes from expert tutors',
  'Download and use offline',
  'Search across all subjects',
  'Community ratings and reviews',
  'Mobile-friendly studying',
  'Free access to quality content'
]

export default function CallToAction() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Start Your Learning Journey Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who are already using StudyHub to organize their study materials and excel in their academics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Explore Resources
          </button>
        </div>

        {/* Small Text */}
        <p className="text-center text-white/70 text-sm mt-8">
          No credit card required • Join 5000+ active students
        </p>
      </div>
    </section>
  )
}

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-20 pb-20 md:pt-32 md:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Your Learning Companion
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                Organize Your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find, organize, and share study materials all in one place.
                StudyHub helps students excel by keeping everything you need
                accessible and well-organized.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                Explore Notes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Study Materials</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">5000+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground">Subjects</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:block h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/30 p-8 space-y-4">
              <div className="space-y-3">
                <div className="h-3 bg-primary/40 rounded w-3/4"></div>
                <div className="h-3 bg-primary/30 rounded w-full"></div>
                <div className="h-3 bg-primary/20 rounded w-5/6"></div>
              </div>
              <div className="space-y-3 pt-4">
                <div className="h-12 bg-secondary/40 rounded-lg"></div>
                <div className="h-12 bg-accent/40 rounded-lg"></div>
                <div className="h-12 bg-primary/40 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

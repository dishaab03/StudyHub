import {
  BookOpen,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Code,
} from "lucide-react";
import SubjectCard from "../components/SubjectCard";

const SUBJECTS = [
  {
    id: 1,
    name: "Mathematics",
    icon: Calculator,
    description: "Algebra, Geometry, Calculus & more",
    color: "primary",
    count: 142,
  },
  {
    id: 2,
    name: "Science",
    icon: Microscope,
    description: "Physics, Chemistry, Biology",
    color: "secondary",
    count: 189,
  },
  {
    id: 3,
    name: "Languages",
    icon: Globe,
    description: "English, Spanish, French & more",
    color: "accent",
    count: 97,
  },
  {
    id: 4,
    name: "Programming",
    icon: Code,
    description: "Python, JavaScript, Java",
    color: "primary",
    count: 156,
  },
  {
    id: 5,
    name: "History & Social Studies",
    icon: BookOpen,
    description: "World History, Politics, Economics",
    color: "secondary",
    count: 123,
  },
  {
    id: 6,
    name: "Arts & Design",
    icon: Palette,
    description: "Visual Arts, Design, Photography",
    color: "accent",
    count: 78,
  },
];

export default function SubjectsGrid() {
  return (
    <section id="subjects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Browse by Subject</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore organized collections of notes and resources across all
            major subjects and disciplines.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  );
}

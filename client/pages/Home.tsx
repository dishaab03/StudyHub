import Hero from "../sections/Hero";
import SubjectsGrid from "../sections/SubjectsGrid";
import FeaturedNotes from "../sections/FeaturedNotes";
import CallToAction from "../sections/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <SubjectsGrid />
      <FeaturedNotes />
      <CallToAction />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Curriculum from "@/components/Curriculum";
import Format from "@/components/Format";
import Impact from "@/components/Impact";
import Solution from "@/components/Solution";
import HowWeTeach from "@/components/HowWeTeach";
import AgeWise from "@/components/AgeWise";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HowWeTeachNew from "@/components/how-we-teach";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Curriculum />
      <HowWeTeachNew />
      <Format />
      <Solution />

      <Impact />
      <AgeWise />
      <CTA />
      <Footer />
    </main>
  );
}

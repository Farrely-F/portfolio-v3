import AboutSection from "@/components/fragments/About";
import Contact from "@/components/fragments/Contact";
import Experience from "@/components/fragments/Experience";
import HeroSection from "@/components/fragments/Hero";
import MainLayout from "@/components/layouts/MainLayout";
import Projects from "@/components/fragments/Projects";
import TechStacks from "@/components/fragments/TechStacks";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <TechStacks />
        <Projects />
        <Experience />
        <Contact />
      </MainLayout>
    </>
  );
}

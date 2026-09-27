import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* 1. Hero — Who I am */}
        <HeroSection />
        {/* 2. Projects — What I've built (most important for a dev portfolio) */}
        <ProjectsSection />
        {/* 3. About — Background, experience, certs */}
        <AboutSection />
        {/* 4. Skills — Tech I use */}
        <SkillsSection />
        {/* 5. Contact — Reach out */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

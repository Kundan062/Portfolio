import React, { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AchievementsSection from './sections/AchievementsSection';
import PositionsSection from './sections/PositionsSection';
import ContactSection from './sections/ContactSection';
import ResumeSection from './sections/ResumeSection';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Kundan Kumar | AI Researcher & Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <PositionsSection />
        <ContactSection />
        <ResumeSection />
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
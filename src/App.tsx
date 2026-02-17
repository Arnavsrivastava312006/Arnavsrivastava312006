import React, { useEffect, useState } from 'react';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PROFILE_DATA, SKILLS } from './constants';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        <Hero data={PROFILE_DATA} />
        <About summary={PROFILE_DATA.summary} />
        <Experience items={EXPERIENCE} />
        <Education items={EDUCATION} />
        <Skills skills={SKILLS} certifications={CERTIFICATIONS} />
        <Contact data={PROFILE_DATA} />
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4">&copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-blue-400 transition-colors">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

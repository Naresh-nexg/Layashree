import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProofSignal from './components/ProofSignal';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import AgencyJourneyPage from './components/AgencyJourneyPage';
import AboutContactPage from './components/AboutContactPage';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  
  return null;
};

const InitialRedirect = () => {
  useEffect(() => {
    if (window.location.hash !== '' && window.location.hash !== '#/') {
      window.location.hash = '#/';
    }
  }, []);

  return null;
};

const HomePage = () => (
  <div className="animate-in fade-in duration-1000">
    <Hero />
    <Marquee />
    <About />
    <ProofSignal />
    <Projects featuredOnly={true} />
    <Experience />
    <Contact />
  </div>
);

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-black selection:bg-[#3b82f6] selection:text-white flex flex-col">
        <ScrollToTop />
        <InitialRedirect />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/agency" element={<AgencyJourneyPage />} />
            <Route path="/contact" element={<AboutContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
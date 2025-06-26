import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Skills from '@/components/Skills.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

import { projects, skills } from '@/data/portfolioData';

function App() {
  return (
    <>
      <Helmet>
        <title>Patrick Costa - Desenvolvedor Full-Stack</title>
        <meta name="description" content="Portfólio de Patrick Costa, Desenvolvedor Full-Stack especialista em criar e otimizar sistemas robustos e eficientes." />
      </Helmet>
      
      <div className="min-h-screen bg-[#110f1a] text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;

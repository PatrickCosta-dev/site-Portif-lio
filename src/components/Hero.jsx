import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-[#110f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Olá, eu sou  <br />
              <span className="text-primary">Patrick Costa</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Desenvolvedor Full-Stack | React.js | Node.js
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={handleDownloadCV}>Download CV</Button>
              <Button size="lg" variant="outline" onClick={handleContactClick}>Entrar em contato</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"></div>
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse"></div>
              <img
  alt="Abstração de código de programação em uma tela"
  className="relative w-full h-full object-cover rounded-full p-2"
  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
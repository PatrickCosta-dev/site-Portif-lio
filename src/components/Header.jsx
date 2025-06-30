// src/components/Header.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sun, Moon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import MobileMenu from './MobileMenu'; // Importe o novo componente

const Header = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#110f1a]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Botão do Menu Hamburger */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold tracking-wider"
            >
              Portfólio
            </motion.h1>

            {/* Botão de Tema */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 0, x: 0 }}>
              
            </motion.div>
          </div>
        </div>
      </header>
      
      {/* Renderização condicional do Menu com animação de saída */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Header;

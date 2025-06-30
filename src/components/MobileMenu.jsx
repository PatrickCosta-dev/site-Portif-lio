// src/components/MobileMenu.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Sobre Mim', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

const MobileMenu = ({ onClose }) => {
  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Painel do Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-2/3 max-w-xs bg-[#1c1c24] z-50 p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Navegação</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-lg text-gray-300 hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;

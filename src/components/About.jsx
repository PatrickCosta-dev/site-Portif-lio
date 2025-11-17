import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#110f1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Desenvolvedor Full-Stack focado no desenvolvimento backend com Python e C++, AWS, Azure e com experiência complementar em React.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

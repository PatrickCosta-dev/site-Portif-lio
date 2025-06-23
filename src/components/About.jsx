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
            Sou um Desenvolvedor Full-Stack focado na criação de sistemas de alta performance. Minha especialidade é o desenvolvimento backend com Python e Node.js, e a construção de interfaces com React. Possuo experiência sólida em ambientes de nuvem como AWS e Google Cloud, utilizando ferramentas de infraestrutura como código, incluindo Terraform e CloudFormation. Minhas principais tecnologias são Python, React Native, Node.js, SQL, AWS, N8N e Langchain.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
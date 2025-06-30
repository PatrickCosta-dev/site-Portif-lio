import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-[#110f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1c1c24] rounded-lg overflow-hidden border border-transparent hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img  alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://pinktiemiami.com/wp-content/uploads/2021/08/coming-soon5.png" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

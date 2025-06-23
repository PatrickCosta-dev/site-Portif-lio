import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minha <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Experiência</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trajetória profissional com foco em desenvolvimento de soluções inovadoras
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-300 font-medium text-lg">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                    <Calendar className="mr-2 h-4 w-4" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
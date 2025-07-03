import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-32 bg-[#110f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Habilidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#1c1c24] p-6 rounded-lg border border-transparent hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center aspect-square"
            >
              {typeof skill.icon === 'string' ? (
              <img src={skill.icon} alt={skill.name} className="h-25 w-25 mb-4" />
                                    ) : (
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                                      )} 
              <p className="text-white font-medium text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
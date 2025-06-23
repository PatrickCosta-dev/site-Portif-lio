import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const contactMethods = [
  {
    name: 'E-mail',
    value: 'patrickcosta20011975@gmail.com',
    href: 'mailto:patrickcosta20011975@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: 'Patrick Costa',
    href: 'https://www.linkedin.com/in/patrick-costa-111317176',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    value: 'PatrickCosta-dev',
    href: 'https://github.com/PatrickCosta-dev',
    icon: Github,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#110f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contato
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <a href={method.href} target="_blank" rel="noopener noreferrer" className="block p-8 bg-[#1c1c24] rounded-lg border border-transparent hover:border-primary transition-colors duration-300 text-center h-full">
                <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{method.name}</h3>
                <p className="text-gray-400 break-words">{method.value}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
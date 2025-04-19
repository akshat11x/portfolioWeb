import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { SOCIAL_LINKS } from '../../utils/constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-4">
                Full-Stack Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Akshat Jain</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-lg">
                I build exceptional digital experiences that are fast, accessible, and visually appealing.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="#projects" size="lg">
                  View My Work
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  Contact Me
                </Button>
              </div>
              
              <SocialLinks links={SOCIAL_LINKS} className="mb-6" />
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full p-1 max-w-md mx-auto"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQHyAzKOl86gnA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1703247167304?e=1745679600&v=beta&t=rpV_qHlCsaEexKqHL9xgV8xhJdNcwd6ebucD80LUkFw"
                alt="Profile"
                className="rounded-full w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center"
        >
          <a 
            href="#about" 
            className="text-slate-400 hover:text-primary-500 dark:text-slate-500 dark:hover:text-primary-400 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
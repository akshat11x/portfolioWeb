import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Button from '../ui/Button';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Chatbot development',
      company: 'TechTree Pvt. Ltd.',
      period: 'Mar`24 - Aug`24',
      description: 'Collaborated with cross-functional teams to identify user needs and implemented chatbot solutions.'
    }  ];

  const education = [
    {
      degree: 'B.Tech IT',
      institution: 'Guru Gobind Singh Indraprastha University',
      period: '2022 - 2026',
      description: 'Graduating with hands on experiences on courses like data structures, Algorithms, Operating Systems, Statistics and Networking along with minor specialization in Data Science and AI.'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Ramjas School Pusa Road',
      period: '2024',
      description: 'Physics, Chemistry, Maths and Engineering Graphics.'
    },
  ];

  const certifications = [
    {
      name: 'AI and Data Science',
      year: '2024',
    }
  ];

  return (
    <section id="resume" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Here's a summary of my professional experience and education.
          </p>
          <Button 
            href="akshat_resume.pdf" 
            variant="primary"
            icon={<Download size={20} />}
          >
            Download CV
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full"></div>
                  <div className="mb-1">
                    <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <h5 className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Section */}
          <div>
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-secondary-200 dark:border-secondary-900"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary-600 dark:bg-secondary-500 rounded-full"></div>
                    <div className="mb-1">
                      <span className="inline-block px-2 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 text-xs font-medium rounded">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <h5 className="text-secondary-600 dark:text-secondary-400 font-medium mb-2">
                      {edu.institution}
                    </h5>
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="text-primary-600 dark:text-primary-400 mr-3">
                        <FileText size={20} />
                      </div>
                      <div>
                        <span className="block text-slate-900 dark:text-white font-medium">
                          {cert.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {cert.year}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';

type Category = 'all' | 'web' | 'other';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  const categoryButtons = [
    { name: 'All', value: 'all' as Category },
    { name: 'Web', value: 'web' as Category },
    { name: 'others', value: 'other' as Category },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents different challenges and solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categoryButtons.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.value
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                     {/* {project.demoUrl && (
                      <Button
                        href={project.demoUrl}
                        variant="primary"
                        size="sm"
                        icon={<ExternalLink size={16} />}
                      >
                        Live Demo
                      </Button>
                    )}  */}
                    
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        variant="outline"
                        size="sm"
                        icon={<Github size={16} />}
                      >
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
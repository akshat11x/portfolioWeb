import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Working on laptop"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              A passionate Full-Stack Developer based in India
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
            B.Tech student in Information Technology graduating in 2026, with strong skills in software development, data
 analysis, and machine learning. Proficient in building web applications and leveraging data to drive insights and
 improve system performance. Experienced in leading teams and collaborating on technical projects to deliver
 innovative, scalable solutions. Seeking a role that combines Data Analysis and Software Engineering to apply
 my technical expertise in real-world applications while continuing to grow in the fields of software development
 and artificial intelligence.
            </p>
            
            {/* <p className="text-slate-600 dark:text-slate-400 mb-6">
              After graduating with a Computer Science degree from UC Berkeley, I worked at several startups where I developed skills in both front-end and back-end development. I enjoy solving complex problems and turning ideas into reality through clean, efficient code.
            </p> */}
            
            {/* <p className="text-slate-600 dark:text-slate-400 mb-6">
              When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or playing the piano. I'm always open to new challenges and collaborations!
            </p> */}
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Education
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  B.Tech IT<br />
                  GGSIPU
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Experience
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  6 months<br />
                  Full-Stack Development and AI
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
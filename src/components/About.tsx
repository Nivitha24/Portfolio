import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'I pour my heart into every project, creating solutions that make a real difference.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every line of code serves a purpose, every design decision drives toward the objective.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Focused',
      description: 'I embrace new technologies and creative approaches to solve complex challenges.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crafting digital experiences with creativity, precision, and a passion for excellence
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Bio Text */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="text-gray-700 text-lg leading-relaxed">
                <p>
                  Hello! I'm Nivitha, a passionate full-stack developer with over 5 years of experience creating digital solutions
                  that bridge the gap between design and functionality. My journey began with curiosity, evolving into a deep love
                  for crafting exceptional user experiences.
                </p>
                <p>
                  I specialize in modern web technologies like React, TypeScript, Node.js, and cloud platforms. What sets me apart is
                  the ability to see the bigger picture while sweating the small stuff.
                </p>
                <p>
                  When I’m not coding, I’m exploring new technologies, contributing to open-source projects, or enjoying a good cup of
                  coffee while brainstorming the next big idea.
                </p>
              </div>

              {/* Tech Chips */}
              <motion.div className="flex flex-wrap gap-3" variants={staggerContainer}>
                {['JavaScript', 'React', 'Node.js', 'Python'].map((tech) => (
                  <motion.span
                    key={tech}
                    variants={fadeInUp}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Card */}
            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 overflow-hidden shadow-xl relative">
                {/* Background Orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/50 to-cyan-200/50 rounded-full translate-y-12 -translate-x-12"></div>

                {/* Profile + Text */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 p-1 shadow-lg"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="/nivitha.png" // Replace with your actual image path
                        alt="Nivitha"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Create Together</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe the best projects come from collaboration, creativity, and a shared vision for excellence. Ready to bring
                    your ideas to life?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Value Cards */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                custom={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

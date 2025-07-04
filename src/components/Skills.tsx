import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, Cloud, Smartphone } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Django', level: 60 },
        { name: 'Java', level: 50 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 50 }
      ]
    },
   
  ];

  const tools = [
    'VS Code', 'Jupter Notebook', 'Figma','Power Bi'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={scaleIn}
                custom={categoryIndex}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-white/50 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-medium text-gray-800">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

    
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
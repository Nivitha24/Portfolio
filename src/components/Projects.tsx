import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    
     {
      id: 1,
      title: 'Project 1',
      description: 'A collaborative task management tool with real-time updates',
      longDescription: 'A powerful task management application that enables teams to collaborate effectively. Features include drag-and-drop task boards, real-time updates, file attachments, comments, and deadline tracking. Built with modern technologies for optimal performance.',
      image: 'https://www.springboard.com/blog/wp-content/uploads/2021/03/SOC-analyst.jpg',
      technologies: ['Python','Numpy','Pandas','Scikit-learn','TensorFlow','Keras','Matplotlib', 'Seaborn'],
      githubUrl: '#',
      featured: true
    },
    
    {
      id: 2,
      title: 'Project 2',
      description: 'A collaborative task management tool with real-time updates',
      longDescription: 'A powerful task management application that enables teams to collaborate effectively. Features include drag-and-drop task boards, real-time updates, file attachments, comments, and deadline tracking. Built with modern technologies for optimal performance.',
      image: 'https://static8.depositphotos.com/1031551/816/i/450/depositphotos_8166647-stock-photo-old-cookbook.jpg',
      technologies: ['HTML', 'CSS', 'Javascript', 'Python','Django'],
      githubUrl: '#',
      featured: true
    },
    
  ];

  const categories = ['all', 'datascience','fullstack']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (filter === 'datascience') return project.technologies.some(tech => ['Numpy','Pandas','Scikit-learn','TensorFlow','Keras','Matplotlib', 'Seaborn'].includes(tech));
        if (filter === 'fullstack') return project.technologies.includes('HTML','CSS','javascript','Python','Django');
        return true;
      });

  return (
    <section id="projects" className="py-20 bg-white">
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
              Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A showcase of my recent work and creative solutions
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    project.featured ? 'md:col-span-2' : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative ${project.featured ? 'h-80' : 'h-64'} overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <motion.button
                            onClick={() => setSelectedProject(project)}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Play className="w-5 h-5" />
                          </motion.button>

                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full text-base font-medium hover:border-gray-400 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                </div>
      
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificateData: Record<string, { title: string; link: string }[]> = {
  workshop: [
    { title: 'WEB DEVELOPMENT Workshop', link: '#' },
  ],
  internship: [
    { title: 'Data Science', link: '#' },
  ],
  course: [
    { title: 'Python', link: '#' },
  ],
  paper: [
    { title: 'Conference Paper Presented MSET2025', link: '#' },
  ],
  achievement: [
    { title: 'Web Designing', link: '#' },
  ],
  hackathon: [
    { title: 'Hackathon', link: '#' },
  ]
};

const filterOptions = ['all', 'workshop', 'internship', 'course', 'paper', 'achievement', 'hackathon'];

const Certificate: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const allCertificates = Object.values(certificateData).flat();
  const displayCertificates = filter === 'all' ? allCertificates : certificateData[filter] || [];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-800 drop-shadow-sm">
          🎓 My Certificates
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 relative">
          {filterOptions.map((key) => (
            <motion.button
              key={key}
              onClick={() => setFilter(key)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === key
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Certificate Cards */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="bg-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform duration-300"
              >
                <div className="text-sm bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full mb-3">
                  {filter === 'all' ? 'Mixed' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{cert.title}</h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm hover:text-blue-700 transition"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Certificates */}
        {displayCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-16 text-lg"
          >
            <p>No certificates found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificate;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>

          <div className="text-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Nivitha
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Building digital experiences that make a difference, one line of code at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-gray-400"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Framer Motion</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-500"
            >
              <p>&copy; {new Date().getFullYear()} Nivitha. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
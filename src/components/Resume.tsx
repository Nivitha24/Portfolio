import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download, ExternalLink, Copy, Check, Calendar, MapPin, Mail, Phone, Briefcase, GraduationCap,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const SectionHeader = ({
  iconLeft,
  title,
  iconRight,
}: {
  iconLeft: React.ReactNode;
  title: string;
  iconRight: React.ReactNode;
}) => (
  <motion.div
    className="relative flex items-center justify-center text-center mb-12"
    variants={fadeInUp}
  >
    <div className="absolute w-full h-px bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400" />
    <div className="relative z-10 flex items-center gap-3 bg-white px-4 py-1 rounded-full shadow">
      <span className="text-blue-600">{iconLeft}</span>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
      <span className="text-blue-600">{iconRight}</span>
    </div>
  </motion.div>
);

const Resume: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const resumeUrl = '#';
  const profileUrl = window.location.href + '#resume';

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const experiences = [
    {
      title: 'Data Science',
      company: 'ABC COMPANY ',
      location: 'INDIA',
      period: '2025',
      achievements: [
        'Led development of microservices architecture serving 1M+ users',
        'Reduced application load time by 40% through optimization',
        'Mentored 5 junior developers and established coding standards',
      ],
    },
    {
      title: 'Full Stack with Python',
      company: 'ABC COMPANY',
      location: 'Chennai',
      period: '2024',
      achievements: [
        'Built scalable web applications using React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with design team to improve user experience',
      ],
    },
  ];


  const education = [
    {
      degree: 'Master of Computer Applications',
      school: 'ABC COLLEGE',
      period: '2023 - 2025',
      CGPA: '8.2',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'ABC COLLEGE',
      period: '2020 - 2023',
      CGPA: '8.5',
    },
    {
      degree: 'HSC (12th Grade)',
      school: 'SCHOOL',
      period: '2019 - 2020',
      CGPA: '59.8%',
    },
    {
      degree: 'SSLC (10th Grade)',
      school: 'SCHOOL',
      period: '2017 - 2018',
      CGPA: '72.4%',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Professional experience and qualifications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.a>

              <motion.button
                onClick={copyProfileLink}
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? 'Copied!' : 'Copy Link'}
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/50 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nivitha R</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">Senior Full Stack Developer</p>
                <p className="text-gray-600 leading-relaxed">
                  Passionate developer with 5+ years of experience building scalable web applications.
                  Expertise in modern JavaScript frameworks, cloud technologies, and agile methodologies.
                  Committed to writing clean, maintainable code and delivering exceptional user experiences.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>example@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+91 000000000 </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>India </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <SectionHeader
            iconLeft={<Briefcase className="w-6 h-6" />}
            title="Experience"
            iconRight={<Briefcase className="w-6 h-6" />}
          />

          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <SectionHeader
            iconLeft={<GraduationCap className="w-6 h-6" />}
            title="Education"
            iconRight={<GraduationCap className="w-6 h-6" />}
          />

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-lg text-blue-600 font-semibold">{edu.school}</p>
                    {edu.CGPA && <p className="text-sm text-gray-600">CGPA: {edu.CGPA}</p>}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

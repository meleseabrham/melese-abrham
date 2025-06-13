import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';
import { generatePDF } from '../utils/pdfGenerator';

const Resume = () => {
  const handleDownload = async () => {
    try {
      await generatePDF();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Assosa University',
      period: '2021 - 2024',
      description: 'Graduated with distinction (GPA: 3.79)',
    },
  ];

  const experience = [
    {
      role: 'Software Application Developer',
      company: 'INSA',
      period: 'Mar 2025 - Present',
      description: 'Working on secure web and mobile application development.',
      responsibilities: [
        'Develop Android apps using Flutter with clean architecture',
        'Manage full development lifecycle from start to finish',
        'Integrate APIs, secure backends, and user authentication',
        'Build responsive websites using HTML, CSS, JavaScript and PHP',
        'Ensure secure code by working with cybersecurity teams',
        'Debug, optimize, and improve mobile and web performance',
      ],
    },
    {
      role: 'Data Encoder',
      company: 'POESSA',
      period: 'Oct 2024 - Mar 2025',
      description: 'Managed and processed data with high accuracy.',
      responsibilities: [
        'Input large data volumes with accuracy and consistency',
        'Organize and maintain physical and digital documents effectively',
        'Coordinate with teams to verify and correct data',
        'Prepare reports by compiling and formatting key entries',
        'Protect confidentiality of sensitive employee and company records',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-4xl font-bold text-center mb-10">Resume</h1>

          {/* Download Button */}
          
          {/* Education Section */}
          <h2 className="text-2xl font-semibold mb-4"><FaGraduationCap className="inline mr-2" /> Education</h2>
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution} ({edu.period})</p>
              <p className="text-gray-600">{edu.description}</p>
            </motion.div>
          ))}

          {/* Experience Section */}
          <h2 className="text-2xl font-semibold mt-10 mb-4"><FaBriefcase className="inline mr-2" /> Experience</h2>
          {experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-700">{exp.company} ({exp.period})</p>
              <p className="text-gray-600 mb-2">{exp.description}</p>
              <ul className="list-disc ml-6 text-gray-600">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
 
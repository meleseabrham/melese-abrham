import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "Assosa University",
      period: "2021 - 2024",
      description: "Graduated with distinction (GPA: 3.79)",
    },
  ];

  const experience = [
    {
      role: "Software Application Developer",
      company: " Information Network Security Agency (INSA) ",
      period: "Mar 2025 - Present",
      description: "Working on secure web and mobile application development.",
      responsibilities: [
        "Develop Android apps using Flutter with clean architecture",

        "Manage full development lifecycle from start to finish",

        "Integrate APIs, secure backends and user authentication",

        "Build responsive websites using HTML, CSS, JavaScript and PHP",

        "Ensure secure code by working with cybersecurity teams",

        "Debug, optimize, and improve mobile and web performance",
      ],
    },
    {
      role: "Data Encoder",
      company:
        "Private Organization Employee Social Security Administration (POESSA)  ",
      period: "Oct 2024 - Mar 2025",
      description: "Managed and processed data with high accuracy.",
      responsibilities: [
        "Input large data volumes with accuracy and consistency",

        "Organize and maintain physical and digital documents effectively",

        "Coordinate with teams to verify and correct data",

        "Prepare reports by compiling and formatting key entries",

        "Protect confidentiality of sensitive employee and company records",
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
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="section-title">Resume</h1>
          <hr />
          <br />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center mb-8">
                <FaGraduationCap className="text-primary text-3xl mr-4" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>

              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-gray-700 ml-6"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-4">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">
                      {item.degree}
                    </h3>
                    <h4 className="text-gray-300 mb-4">{item.institution}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center mb-8">
                <FaBriefcase className="text-primary text-3xl mr-4" />
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>

              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-gray-700 ml-6"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-4">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                    <h4 className="text-gray-300 mb-4">{item.company}</h4>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiReact,
  SiDart,
  SiFlutter,
  SiKotlin,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 className="text-orange-500" />, percentage: 100 },
  { icon: <SiCss3 className="text-blue-500" />, percentage: 90 },
  { icon: <SiJavascript className="text-yellow-400" />, percentage: 85 },
  { icon: <SiPhp className="text-indigo-400" />, percentage: 80 },
  { icon: <SiReact className="text-cyan-400" />, percentage: 85 },
  { icon: <SiDart className="text-blue-400" />, percentage: 75 },
  { icon: <SiFlutter className="text-sky-500" />, percentage: 75 },
  { icon: <SiKotlin className="text-purple-400" />, percentage: 70 },
];

const About = () => {
  const personalInfo = [
    { label: "Birthday", value: "Available on request" },
    { label: "Website", value: "portfolio.melese.dev" },
    { label: "Phone", value: "+2519 29 52 75 64" },
    { label: "City", value: "Addis Ababa, Ethiopia" },
    { label: "Age", value: "Available on request" },
    { label: "Degree", value: "BSc in Computer Science" },
    { label: "Email", value: "meleseabrham17@gmail.com" },
    { label: "Freelance", value: "Available" },
  ];

  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500" />,
      percentage: 100,
    },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" />, percentage: 90 },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      percentage: 85,
    },
    {
      name: "PHP",
      icon: <SiPhp className="text-indigo-400" />,
      percentage: 80,
    },
    {
      name: "React",
      icon: <SiReact className="text-cyan-400" />,
      percentage: 85,
    },
    {
      name: "Dart",
      icon: <SiDart className="text-blue-400" />,
      percentage: 75,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-sky-500" />,
      percentage: 75,
    },
    {
      name: "Kotlin",
      icon: <SiKotlin className="text-purple-400" />,
      percentage: 70,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="section-title">About Me</h1>
          <hr></hr>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Software Application Developer
              </h2>
              <p className="text-gray-300 mb-6">
                Graduated from Assosa University with a BSc in Computer Science
                (GPA: 3.79), I am a passionate software developer currently
                working at INSA as a Software Application Developer.
              </p>
              <p className="text-gray-300 mb-6">
                "Effort brings growth; struggle is part of the journey." This
                quote reflects my approach to continuous learning and
                problem-solving in software development.
              </p>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="border-b border-gray-700 pb-2"
                  >
                    <span className="font-semibold text-primary">
                      {info.label}:{" "}
                    </span>
                    <span className="text-gray-300">{info.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        {skill.icon}
                        <span className="hidden sm:inline">
                          {skill.name}
                        </span>{" "}
                        {/* Optional: show name on larger screens */}
                      </div>
                      <span className="text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar bg-gray-700 h-2 rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="skill-progress bg-primary h-2 rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

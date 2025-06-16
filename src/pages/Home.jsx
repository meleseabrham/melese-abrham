// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "bootstrap-icons/font/bootstrap-icons.css";
import HiddenResume from "../components/HiddenResume";
import { generatePDF } from "../utils/pdfGenerator";

const Home = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownload = async () => {
    setIsGeneratingPDF(true);
    try {
      await generatePDF();
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-gray-900 relative overflow-hidden">
      <HiddenResume />

      <section className="relative h-screen flex flex-col md:flex-row">
        {/* Mobile View */}
        <div className="w-full md:hidden flex flex-col items-center justify-center p-8 min-h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 group mb-8">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-blue-400 to-primary blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-r from-primary via-blue-400 to-primary">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src="/assets/img/hero-bg.jpg"
                    alt="Melese Abrham"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary animate-glow text-center">
              Melese Abrham
            </h1>

            <div className="text-xl text-gray-200 mb-6 text-center">
              I'm{" "}
              <span className="text-primary font-semibold">
                <Typewriter
                  words={[
                    "Software Developer",
                    "Web Developer",
                    "Android Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownload}
                disabled={isGeneratingPDF}
                className="btn btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isGeneratingPDF ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <FaDownload />
                    Download Resume
                  </>
                )}
              </button>
              <Link
                to="/contact"
                className="btn btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaEnvelope />
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-3 justify-center"
            >
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "React",
                "Dart",
                "Flutter",
                "Kotlin",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800/70 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex w-full lg:w-1/2 h-full items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary animate-glow">
              Melese Abrham
            </h1>

            <div className="text-3xl text-gray-200 mb-8">
              I'm{" "}
              <span className="text-primary font-semibold">
                <Typewriter
                  words={[
                    "Software Developer",
                    "Web Developer",
                    "Android Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownload}
                disabled={isGeneratingPDF}
                className="btn btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isGeneratingPDF ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <FaDownload />
                    Download Resume
                  </>
                )}
              </button>
              <Link
                to="/contact"
                className="btn btn-outline flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FaEnvelope />
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "React",
                "Dart",
                "Flutter",
                "Kotlin",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800/70 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-1/2 h-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/20 to-transparent z-10" />
          <img
            src="/assets/img/hero-bg.jpg"
            alt="Decorative background"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent z-20" />
        </div>
      </section>
    </div>
  );
};

export default Home;

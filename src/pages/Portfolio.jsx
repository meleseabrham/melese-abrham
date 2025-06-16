import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: '/assets/project/log.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/meleseabrham/shopping-app',
      liveUrl: '#',
    },
    {
      title: 'Shopping App',
      description:
        'A mobile task management application developed using Flutter. Includes features like task categorization, reminders, and progress tracking.',
      image: '/assets/project/app.png',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: 'https://github.com/meleseabrham/shopping-app',
      liveUrl: '#',
    },
    {
      title: 'Complain Management System',
      description:
        'A secure complain management system built for Assosa University using HTML, CSS, PHP,javascript,bootstrap and MySQL. Implements role-based access control and real-time stock tracking.',
      image: '/assets/project/cms.png',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/meleseabrham/Complain-Management-System',
      liveUrl: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          
        >
            <br></br>
            <br></br><br></br><br></br><br></br>
          <h1 className="section-title">Portfolio</h1>
          <hr></hr>
          <br></br>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 rounded-lg overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image'
                    }}
                  />
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200 transition-colors"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/meleseabrham"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <FaGithub size={30} />
             <span className="text-lg">View More Projects on GitHub</span>

            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio 
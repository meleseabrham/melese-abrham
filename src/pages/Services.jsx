import { motion } from 'framer-motion'
import {
  FaMobile,
  FaLaptopCode,
  FaCogs,
  FaPaintBrush,
  FaTools,
  FaShieldAlt,
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Mobile App Development',
      description:
        'Creating native and cross-platform mobile applications using Flutter, Dart, and Kotlin. Specializing in Android development with modern UI/UX practices.',
      icon: <FaMobile className="text-4xl" />,
    },
    {
      title: 'Secure Web Development',
      description:
        'Building secure and scalable web applications using modern technologies like React, PHP, and Node.js. Focus on implementing robust security measures.',
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: 'Custom Software Solutions',
      description:
        'Developing tailored software solutions to meet specific business needs. From concept to deployment, ensuring quality and efficiency.',
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: 'UI/UX Design',
      description:
        'Creating intuitive and engaging user interfaces with a focus on user experience. Implementing modern design principles and responsive layouts.',
      icon: <FaPaintBrush className="text-4xl" />,
    },
    {
      title: 'Maintenance & Support',
      description:
        'Providing ongoing maintenance and support for existing applications. Regular updates, bug fixes, and performance optimization.',
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: 'Cybersecurity Integration',
      description:
        'Implementing robust security measures in applications. Ensuring data protection, secure authentication, and compliance with security standards.',
      icon: <FaShieldAlt className="text-4xl" />,
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
          <h1 className="section-title">Services</h1>
          <hr></hr>
          <br></br>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors group"
              >
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with secure,
              scalable, and user-friendly applications.
            </p>
            <a
              href="/contact"
              className="btn btn-primary inline-block"
            >
             Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services 
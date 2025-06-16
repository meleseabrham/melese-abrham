import { Link } from 'react-router-dom'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/melescabrham',
      icon: <FaGithub size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:meleseabrham17@gmail.com',
      icon: <FaEnvelope size={20} />,
    },
  ]

  return (
    <footer className="bg-secondary/95 backdrop-blur-sm py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-primary">
              Melese<span className="text-white">Abrham</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Software Application Developer specializing in Web & Android development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">Addis Ababa, Ethiopia</p>
            <p className="text-gray-400 mb-4">+2519 29 52 75 64</p>
            
            {/* Social Links */}
           
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            
              className="social-links flex justify-center gap-10 mt-8 text-center">

            
              <a
                href="https://github.com/meleseabrham"
                className="text-2xl hover:text-primary transition-transform transform hover:scale-110"
                title="GitHub"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://x.com/meleseabrham17?t=yP7tHZ7KaJqszSujlRvcOA&s=09"
                className="text-2xl hover:text-primary transition-transform transform hover:scale-110"
                title="X (Twitter)"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://www.facebook.com/melesseabrham51?mibextid=JRoKGi"
                className="text-2xl hover:text-primary transition-transform transform hover:scale-110"
                title="Facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/melesse_ab?utm_source=qr&igsh=MWc2MGZkbmpnMGd6bA=="
                className="text-2xl hover:text-primary transition-transform transform hover:scale-110"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/melese-abrham-4b2219369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-2xl hover:text-primary transition-transform transform hover:scale-110"
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </motion.div>
            <br></br>
          <p>© {currentYear} Melese Abrham. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
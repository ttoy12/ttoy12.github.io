import React from 'react'
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto text-center flex flex-col items-center gap-4">
        <div className="flex space-x-6">
          <a href="mailto:thomastoy1415@gmail.com" className="text-white hover:text-blue-600 transition-colors duration-300" aria-label="Email">
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-toy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/ttoy12" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors duration-300" aria-label="GitHub">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="/ThomasToy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors duration-300" aria-label="Resume">
            <FaFileAlt className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tommy Toy</p>
      </div>
    </footer>
  )
}

export default Footer

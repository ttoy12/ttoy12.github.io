import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
    <div className="container mx-auto text-center flex flex-col items-center">
        <div className="flex space-x-6">
          <a href="mailto:thomastoy1415@gmail.com" className="text-white hover:text-gray-400 transition-colors duration-300" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-toy/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://github.com/ttoy12" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
  </footer>
  )
}

export default Footer
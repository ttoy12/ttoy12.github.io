import React from 'react'
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='border-t border-gray-800 bg-gray-900 py-8 text-white'>
      <div className='container mx-auto flex flex-col items-center gap-4 text-center'>
        <div className='flex space-x-6'>
          <a
            href='mailto:thomastoy1415@gmail.com'
            className='text-white transition-colors duration-300 hover:text-accent-400'
            aria-label='Email'
          >
            <FaEnvelope className='h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/thomas-toy/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white transition-colors duration-300 hover:text-accent-400'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='h-6 w-6' />
          </a>
          <a
            href='https://github.com/ttoy12'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white transition-colors duration-300 hover:text-accent-400'
            aria-label='GitHub'
          >
            <FaGithub className='h-6 w-6' />
          </a>
          <a
            href='/ThomasToy_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white transition-colors duration-300 hover:text-accent-400'
            aria-label='Resume'
          >
            <FaFileAlt className='h-6 w-6' />
          </a>
        </div>
        <p className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Tommy Toy
        </p>
      </div>
    </footer>
  )
}

export default Footer

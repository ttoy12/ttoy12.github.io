import React from 'react'
import Link from 'next/link';

interface HeaderProps {
    menuOpen: boolean;
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu}) => {
  return (
    <header className="bg-blue-800 text-white p-6 fixed top-0 left-0 w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex space-x-4 absolute md:static w-full md:w-auto left-0 top-full md:top-auto`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 bg-blue-800 md:space-y-0 md:space-x-4 p-4 md:p-0">
          <li className="text-xl">
            <Link
              href="#about"
              className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href="#experience"
              className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href="#projects"
              className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href="#contact"
              className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header;
import React from 'react'
import Image from 'next/image';

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black text-white p-6 fixed top-0 left-0 w-full z-10 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/logo_no_bg.jpg" height={45} width={45} alt="logo" />
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
          className={`${menuOpen ? 'block' : 'hidden'
            } md:flex space-x-4 absolute md:static w-full md:w-auto left-0 top-full md:top-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0 bg-black">
            <li className="text-xl">
              <button
                className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                onClick={() => { scrollToSection('about'); toggleMenu(); }}
              >
                About
              </button>
            </li>
            <li className="text-xl">
              <button
                className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                onClick={() => { scrollToSection('experience'); toggleMenu(); }}
              >
                Experience
              </button>
            </li>
            <li className="text-xl">
              <button
                className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                onClick={() => { scrollToSection('projects'); toggleMenu(); }}
              >
                Projects
              </button>
            </li>
            <li className="text-xl">
              <button
                className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                onClick={() => { scrollToSection('gallery'); toggleMenu(); }}
              >
                Gallery
              </button>
            </li>
            <li className="text-xl">
              <button
                className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                onClick={() => { scrollToSection('contact'); toggleMenu(); }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
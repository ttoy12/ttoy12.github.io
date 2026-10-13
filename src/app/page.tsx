"use client"
import { useState } from 'react';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Gallery from './components/sections/Gallery';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main id="main-content" role='main'>
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

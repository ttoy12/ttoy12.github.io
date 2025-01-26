"use client"
import Head from 'next/head';
import Script from 'next/script';
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
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main role='main'>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Gallery />
      </main>
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" strategy="beforeInteractive" />
    </div>
  );
};

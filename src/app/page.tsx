"use client"
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


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

      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" strategy="beforeInteractive" />
    </div>
  );
};

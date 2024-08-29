"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

const About = () => {
    const typedElement = useRef(null);

    useEffect(() => {
      const options = {
        strings: ['Developer', 'Problem Solver', 'Collaborative'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
      };
  
      const typed = new Typed(typedElement.current, options);
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
    <section id="about" className="hero bg-gray-900 text-white py-20">
    <div className="container mx-auto text-center flex flex-col items-center">
      <Image src="/my_photo.jpg" alt="my image" height={800} width={400} className="mb-6" />
      <h2 className="text-4xl font-bold mb-4">Hello, I'm Thomas</h2>
      <h3 className="text-xl font-bold mb-4">
        <span ref={typedElement}></span>
      </h3>
      <p className="text-lg mb-8 w-1/2">I am a recent Computer Science graduate from the University of California, Santa Cruz. I am a Software Engineer with a focus on web development, but would like to also explore new areas.</p>

      <h3 className="text-xl font-bold mb-4">Skills</h3>
      <div className="flex flex-wrap justify-center mb-8">
        {['C++', 'C', 'Python', 'Node.js', 'JavaScript', 'React', 'Nextjs', 'Expo', 'React Native', 'TypeScript', 'Vue.js', 'Jest', 'HTML', 'CSS', 'SQL'].map(skill => (
          <span key={skill} className="bg-gray-800 text-white py-2 px-4 m-2 rounded-lg">
            {skill}
          </span>
        ))}
      </div>

      <a href="https://github.com/ttoy12/Resume/blob/e5a2769dd84580e0870af235cdf59a12f843db9c/ThomasToyResume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        Click here to checkout my resume
      </a>
    </div>
  </section>
  )
}

export default About
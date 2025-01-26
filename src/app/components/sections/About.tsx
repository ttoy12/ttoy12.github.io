"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'

const About = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Developer', 'Problem Solver', 'Collaborater'],
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
    <section id="about" className="hero bg-gray-900 text-white py-20 mt-10 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sign_hill.JPG')" }}
      ></div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-10 py-20 px-4 md:px-8 lg:px-12">
        {/* Text on the left for larger screens, below image for smaller screens */}
        <div className="order-2 md:order-1 text-center md:text-left w-full md:w-2/3 lg:w-3/5">
          <h2 className="text-4xl font-bold mb-4">Hello, I&apos;m Thomas</h2>
          <h3 className="text-xl font-bold mb-4">
            <span ref={typedElement}></span>
          </h3>
          <p className="text-lg mb-8">
            I am a recent Computer Science graduate from the University of California, Santa Cruz. I am a Software Engineer with a focus on web development, but would like to also explore new areas.
          </p>
          <p className="text-lg mb-8">
            I have also recently got into drone photography so feel free to check out my gallery!
          </p>

          <h3 className="text-xl font-bold mb-4">Skills/Languages/Tools/Frameworks</h3>
          <div className="flex flex-wrap justify-center md:justify-start mb-8">
            {['C++', 'C', 'Python', 'Node.js', 'JavaScript', 'React', 'Next.js', 'Expo', 'React Native', 'TypeScript', 'Vue.js', 'Jest', 'HTML', 'CSS', 'SQL', 'Firebase', 'Git'].map(skill => (
              <span key={skill} className="bg-gray-800 text-white py-2 px-4 m-2 rounded-lg hover:scale-110 duration-300">
                {skill}
              </span>
            ))}
          </div>

          <a href="https://github.com/ttoy12/Resume/blob/main/ThomasToy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Click here to checkout my resume
          </a>
        </div>

        {/* Image on the right for larger screens, top for smaller screens */}
        <div className="order-1 md:order-2 rounded-full overflow-hidden w-full md:w-1/3 lg:w-2/5 max-w-[350px]">
          <Image
            src="/my_photo2.jpg"
            alt="my image"
            height={350}
            width={350}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default About
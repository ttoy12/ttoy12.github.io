"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import { FaEnvelope, FaFileAlt } from 'react-icons/fa'

const skillGroups = [
  { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'SQL'] },
  { label: 'Frameworks & Platforms', skills: ['React', 'Next.js', 'Node.js', 'Express', 'React Native', 'Expo', 'Vue.js', 'Tailwind CSS', 'Supabase', 'Firebase'] },
  { label: 'Tools', skills: ['Git', 'Jest', 'Storybook', 'D3.js', 'Figma', 'Jira'] },
  { label: 'Robotics & AI', skills: ['Teleoperation', 'Data Annotation', 'Robot Testing', 'Quality Assurance'] },
]

const About = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Developer', 'Problem Solver', 'Collaborator'],
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
        style={{ backgroundImage: "url('/gallery/sign_hill.JPG')" }}
      ></div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-10 py-8 md:py-20 px-4 md:px-8 lg:px-12">
        {/* Text on the left for larger screens, below image for smaller screens */}
        <div className="order-2 md:order-1 text-center md:text-left w-full md:w-2/3 lg:w-3/5">
          <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Tommy</h1>
          <h3 className="text-xl font-bold mb-4">
            <span ref={typedElement}></span>
          </h3>
          <p className="text-lg mb-4">
            I&apos;m a UC Santa Cruz Computer Science graduate who likes building things &mdash; from full-stack web apps with Next.js, TypeScript, and Supabase to hands-on work with humanoid robots at 1X, where I collect data and test new software alongside the engineering team.
          </p>
          <p className="text-lg mb-8">
            Outside of tech, I enjoy photography and design &mdash; check out my{' '}
            <a href="#gallery" className="underline underline-offset-4 hover:text-accent-300">gallery</a>.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <a
              href="/ThomasToy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-700 hover:bg-accent-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <FaFileAlt aria-hidden="true" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <FaEnvelope aria-hidden="true" /> Contact me
            </a>
          </div>

          <h2 className="sr-only">Skills</h2>
          <dl className="space-y-4">
            {skillGroups.map(({ label, skills }) => (
              <div key={label}>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-2">{label}</dt>
                <dd className="flex flex-wrap justify-center md:justify-start gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="bg-gray-800/90 text-white text-sm py-1.5 px-3 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image on the right for larger screens, top for smaller screens */}
        <div className="order-1 md:order-2 rounded-full overflow-hidden w-48 h-48 mb-8 md:mb-0 md:h-auto md:w-1/3 lg:w-2/5 max-w-[350px] shrink-0">
          <Image
            src="/my_photo2.jpg"
            alt="Tommy Toy"
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
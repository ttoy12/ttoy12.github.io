'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import { FaEnvelope, FaFileAlt } from 'react-icons/fa'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'SQL']
  },
  {
    label: 'Frameworks & Platforms',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'React Native',
      'Expo',
      'Vue.js',
      'Tailwind CSS',
      'Supabase',
      'Firebase'
    ]
  },
  {
    label: 'Tools',
    skills: ['Git', 'Jest', 'Storybook', 'D3.js', 'Figma', 'Jira']
  },
  {
    label: 'Robotics & AI',
    skills: [
      'Teleoperation',
      'Data Annotation',
      'Robot Testing',
      'Quality Assurance'
    ]
  }
]

const About = () => {
  const typedElement = useRef(null)

  useEffect(() => {
    const options = {
      strings: ['Developer', 'Problem Solver', 'Collaborator'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    }

    const typed = new Typed(typedElement.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section
      id='about'
      className='hero relative mt-10 bg-gray-900 py-20 text-white'
    >
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: "url('/gallery/sign_hill.JPG')" }}
      ></div>

      {/* Semi-transparent overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Content */}
      <div className='container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-8 md:flex-row md:px-8 md:py-20 lg:px-12'>
        {/* Text on the left for larger screens, below image for smaller screens */}
        <div className='order-2 w-full text-center md:order-1 md:w-2/3 md:text-left lg:w-3/5'>
          <h1 className='mb-4 text-4xl font-bold'>Hello, I&apos;m Tommy</h1>
          <h3 className='mb-4 text-xl font-bold'>
            <span ref={typedElement}></span>
          </h3>
          <p className='mb-4 text-lg'>
            I&apos;m a UC Santa Cruz Computer Science graduate who likes
            building things &mdash; from full-stack web apps with Next.js,
            TypeScript, and Supabase to hands-on work with humanoid robots at
            1X, where I collect data and test new software alongside the
            engineering team.
          </p>
          <p className='mb-8 text-lg'>
            Outside of tech, I enjoy photography and design &mdash; check out my{' '}
            <a
              href='#gallery'
              className='underline underline-offset-4 hover:text-accent-300'
            >
              gallery
            </a>
            .
          </p>

          <div className='mb-10 flex flex-wrap justify-center gap-4 md:justify-start'>
            <a
              href='/ThomasToy_Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg bg-accent-700 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-accent-800'
            >
              <FaFileAlt aria-hidden='true' /> Resume
            </a>
            <a
              href='#contact'
              className='inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-gray-900'
            >
              <FaEnvelope aria-hidden='true' /> Contact me
            </a>
          </div>

          <h2 className='sr-only'>Skills</h2>
          <dl className='space-y-4'>
            {skillGroups.map(({ label, skills }) => (
              <div key={label}>
                <dt className='mb-2 text-sm font-semibold uppercase tracking-wider text-gray-300'>
                  {label}
                </dt>
                <dd className='flex flex-wrap justify-center gap-2 md:justify-start'>
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className='rounded-lg bg-gray-800/90 px-3 py-1.5 text-sm text-white'
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image on the right for larger screens, top for smaller screens */}
        <div className='order-1 mb-8 h-48 w-48 max-w-[350px] shrink-0 overflow-hidden rounded-full md:order-2 md:mb-0 md:h-auto md:w-1/3 lg:w-2/5'>
          <Image
            src='/my_photo2.jpg'
            alt='Tommy Toy'
            height={350}
            width={350}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default About

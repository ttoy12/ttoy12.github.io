'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Typed from 'typed.js'
import { FaChevronDown, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import Reveal from '../Reveal'

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
      strings: ['Humanoid robotics at 1X'],
      typeSpeed: 60,
      startDelay: 1000,
      loop: false,
      showCursor: true
    }

    const typed = new Typed(typedElement.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id='about' className='bg-gray-900 text-white'>
      <div className='hero relative flex min-h-screen items-center pb-24 pt-24'>
        {/* Background image */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: "url('/gallery/sign_hill.JPG')" }}
        ></div>

        {/* Overlay darkens the photo and fades it into the skills strip below */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-gray-900'></div>

        {/* Content */}
        <div className='container relative z-10 mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:gap-12 md:px-8 lg:px-12'>
          {/* Text on the left for larger screens, below image for smaller screens */}
          <div className='order-2 w-full text-center md:order-1 md:w-2/3 md:text-left lg:w-3/5'>
            <h1 className='mb-4 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl'>
              Hello, I&apos;m Tommy
            </h1>
            <p className='mb-6 min-h-[2rem] text-2xl font-semibold text-gray-200'>
              <span ref={typedElement}></span>
            </p>
            <p className='mb-4 text-lg text-gray-100'>
              I&apos;m a UC Santa Cruz Computer Science graduate who likes
              building things &mdash; from full-stack web apps with Next.js,
              TypeScript, and Supabase to hands-on work with humanoid robots at
              1X, where I collect data and test new software alongside the
              engineering team.
            </p>
            <p className='mb-8 text-lg text-gray-100'>
              Outside of tech, I enjoy photography and design &mdash; check out
              my{' '}
              <a
                href='#gallery'
                className='underline underline-offset-4 hover:text-accent-300'
              >
                gallery
              </a>
              .
            </p>

            <div className='flex flex-wrap justify-center gap-4 md:justify-start'>
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
          </div>

          {/* Image on the right for larger screens, top for smaller screens */}
          <div className='order-1 mb-8 h-48 w-48 max-w-[350px] shrink-0 overflow-hidden rounded-full ring-4 ring-white/20 md:order-2 md:mb-0 md:h-auto md:w-1/3 lg:w-2/5'>
            <Image
              src='/my_photo2.jpg'
              alt='Tommy Toy'
              height={350}
              width={350}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <a
          href='#skills'
          aria-label='Scroll to skills'
          className='absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-2xl text-white/70 transition-colors hover:text-white motion-safe:animate-bounce'
        >
          <FaChevronDown aria-hidden='true' />
        </a>
      </div>

      <div
        id='skills'
        className='container mx-auto scroll-mt-[4.5rem] px-4 pb-16'
      >
        <h2 className='mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-400'>
          Skills
        </h2>
        <dl className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {skillGroups.map(({ label, skills }, index) => (
            <Reveal key={label} delay={index * 100}>
              <dt className='mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300'>
                {label}
              </dt>
              <dd className='flex flex-wrap gap-2'>
                {skills.map(skill => (
                  <span
                    key={skill}
                    className='rounded-lg bg-gray-800 px-3 py-1.5 text-sm text-gray-100 ring-1 ring-white/10'
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About

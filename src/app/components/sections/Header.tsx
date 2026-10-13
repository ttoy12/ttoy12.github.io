'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')

  // Highlight the nav item for whichever section is crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className='fixed left-0 top-0 z-50 w-full bg-black p-6 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <a
          href='#'
          onClick={e => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMenuOpen(false)
          }}
          aria-label='Back to top'
        >
          <Image src='/logo_no_bg.jpg?v=2' height={45} width={45} alt='' />
        </a>
        <button
          className='text-white focus:outline-none md:hidden'
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls='site-nav'
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
        <nav
          id='site-nav'
          aria-label='Main'
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute left-0 top-full w-full space-x-4 md:static md:top-auto md:flex md:w-auto`}
        >
          <ul className='flex flex-col space-y-4 bg-black p-4 md:flex-row md:space-x-4 md:space-y-0 md:p-0'>
            {sections.map(({ id, label }) => {
              const active = id === activeId
              return (
                <li key={id} className='text-xl'>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? 'location' : undefined}
                    className={`inline-block border-b-2 px-3 py-2 transition-all duration-500 hover:border-accent-400 ${active ? 'border-accent-400 text-accent-300' : 'border-transparent'}`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

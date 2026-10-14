'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import Reveal from '../Reveal'

interface GalleryItem {
  src: string
  caption: string
}

const items: GalleryItem[] = [
  {
    src: '/gallery/me_sign_hill.JPG',
    caption: 'Sunset on Sign Hill, South San Francisco'
  },
  {
    src: '/gallery/sign_hill.JPG',
    caption: '“The Industrial City” sign from above, South San Francisco'
  },
  {
    src: '/gallery/tal_vez_fui_yo.JPG',
    caption: 'Cover art for “Tal Vez Fui Yo” by Alex Jr.'
  },
  {
    src: '/gallery/te_amare.JPG',
    caption: 'Cover art for “Te Amaré” by Alex Jr.'
  },
  {
    src: '/gallery/T&I_flyer.JPG',
    caption: 'Flyer for T & I – AI Coaching & Consulting'
  },
  { src: '/gallery/beach.JPG', caption: 'Coastal cliffs from above' },
  { src: '/gallery/orange_park1.JPG', caption: 'Orange Park from above' },
  {
    src: '/gallery/orange_park_tree.JPG',
    caption: 'Weeping willow at Orange Park'
  }
]

const Gallery = () => {
  const [loaded, setLoaded] = useState(Array(items.length).fill(false))
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const handleImageLoad = (index: number) => {
    setLoaded(prev => {
      const newLoaded = [...prev]
      newLoaded[index] = true
      return newLoaded
    })
  }

  const close = useCallback(() => {
    setOpenIndex(null)
    lastTrigger.current?.focus()
  }, [])

  const step = useCallback((delta: number) => {
    setOpenIndex(index =>
      index === null ? null : (index + delta + items.length) % items.length
    )
  }, [])

  // Keyboard controls and scroll lock while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return
    closeButton.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [openIndex, close, step])

  const current = openIndex === null ? null : items[openIndex]

  return (
    <section
      id='gallery'
      className='bg-gradient-to-r from-gray-300 to-gray-200 py-20'
    >
      <div className='container mx-auto px-4'>
        <Reveal>
          <h2 className='mb-8 text-center text-4xl font-extrabold text-gray-800'>
            Photography &amp; Design
          </h2>
        </Reveal>

        <Reveal>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {items.map((item, index) => (
              <figure
                key={item.src}
                className='group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl'
              >
                <button
                  type='button'
                  className='absolute inset-0 h-full w-full cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-500'
                  onClick={e => {
                    lastTrigger.current = e.currentTarget
                    setOpenIndex(index)
                  }}
                  aria-label={`View larger: ${item.caption}`}
                >
                  {!loaded[index] && (
                    <div className='absolute inset-0 animate-pulse rounded-lg bg-gray-200'></div>
                  )}
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
                    className='transform object-cover transition-transform duration-300 group-hover:scale-105'
                    onLoad={() => handleImageLoad(index)}
                  />
                </button>
                <figcaption className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-8 text-sm text-white opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100'>
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>

      {current && (
        <div
          className='fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4'
          role='dialog'
          aria-modal='true'
          aria-label={current.caption}
          onClick={close}
        >
          <button
            ref={closeButton}
            type='button'
            onClick={close}
            className='absolute right-4 top-4 p-2 text-2xl text-white hover:text-accent-300'
            aria-label='Close'
          >
            <FaTimes aria-hidden='true' />
          </button>
          <button
            type='button'
            onClick={e => {
              e.stopPropagation()
              step(-1)
            }}
            className='absolute left-2 p-3 text-3xl text-white hover:text-accent-300 md:left-6'
            aria-label='Previous image'
          >
            <FaChevronLeft aria-hidden='true' />
          </button>
          <button
            type='button'
            onClick={e => {
              e.stopPropagation()
              step(1)
            }}
            className='absolute right-2 p-3 text-3xl text-white hover:text-accent-300 md:right-6'
            aria-label='Next image'
          >
            <FaChevronRight aria-hidden='true' />
          </button>

          <figure
            className='flex w-full max-w-5xl flex-col items-center'
            onClick={e => e.stopPropagation()}
          >
            <div className='relative h-[75vh] w-full'>
              <Image
                key={current.src}
                src={current.src}
                alt={current.caption}
                fill
                sizes='(min-width: 1024px) 1024px, 100vw'
                className='object-contain'
                priority
              />
            </div>
            <figcaption className='mt-4 text-center text-white'>
              {current.caption}
              <span className='mt-1 block text-sm text-gray-400'>
                {openIndex! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

export default Gallery

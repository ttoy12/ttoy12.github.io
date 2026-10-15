'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox, { LightboxItem } from '../Lightbox'
import Reveal from '../Reveal'

const items: LightboxItem[] = [
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

  const handleImageLoad = (index: number) => {
    setLoaded(prev => {
      const newLoaded = [...prev]
      newLoaded[index] = true
      return newLoaded
    })
  }

  return (
    <section id='gallery' className='bg-gray-50 py-20'>
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
                  onClick={() => setOpenIndex(index)}
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

      <Lightbox items={items} index={openIndex} onChange={setOpenIndex} />
    </section>
  )
}

export default Gallery

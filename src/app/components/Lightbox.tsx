'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'

export interface LightboxItem {
  src: string
  caption: string
}

interface LightboxProps {
  items: LightboxItem[]
  // Index of the item shown; null when closed
  index: number | null
  onChange: (index: number | null) => void
}

// Full-screen image viewer shared by the gallery and project screenshots.
// Arrow keys step through the items, Escape closes, and focus returns to whatever opened it.
// Portaled to <body> so a transformed ancestor (card hover, scroll reveal) can't trap the fixed overlay.
const Lightbox = ({ items, index, onChange }: LightboxProps) => {
  const closeButton = useRef<HTMLButtonElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const isOpen = index !== null

  const close = useCallback(() => onChange(null), [onChange])

  const step = useCallback(
    (delta: number) => {
      if (index !== null)
        onChange((index + delta + items.length) % items.length)
    },
    [index, items.length, onChange]
  )

  // Remember the opener on open, and give focus back to it on close
  useEffect(() => {
    if (!isOpen) return
    opener.current = document.activeElement as HTMLElement | null
    closeButton.current?.focus()
    return () => opener.current?.focus()
  }, [isOpen])

  // Keyboard controls and scroll lock while open
  useEffect(() => {
    if (!isOpen) return
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
  }, [isOpen, close, step])

  if (index === null) return null
  const current = items[index]
  const several = items.length > 1

  return createPortal(
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
      {several && (
        <>
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
        </>
      )}

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
          {several && (
            <span className='mt-1 block text-sm text-gray-400'>
              {index + 1} / {items.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>,
    document.body
  )
}

export default Lightbox

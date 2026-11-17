'use client'
import React, { useState } from 'react'
import { FaImages } from 'react-icons/fa'
import Lightbox, { LightboxItem } from './Lightbox'

// "View screenshots" link that opens its own lightbox, for cards that don't otherwise need client state.
const ScreenshotsButton = ({ items }: { items: LightboxItem[] }) => {
  const [index, setIndex] = useState<number | null>(null)
  return (
    <div className='mt-4'>
      <button
        type='button'
        onClick={() => setIndex(0)}
        className='inline-flex items-center gap-2 font-medium text-accent-700 hover:underline'
      >
        <FaImages aria-hidden='true' /> View screenshots ({items.length})
      </button>
      <Lightbox items={items} index={index} onChange={setIndex} />
    </div>
  )
}

export default ScreenshotsButton

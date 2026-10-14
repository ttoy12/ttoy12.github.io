'use client'
import React, { useEffect, useRef, useState } from 'react'

// Fades and slides its children up the first time they scroll into view. Motion is skipped for reduced-motion users.
const Reveal = ({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  /** Milliseconds to wait before animating, for staggering items in a grid */
  delay?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
      className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal

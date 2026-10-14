import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

// Building blocks shared by the Experience and Projects cards so both sections stay visually consistent.

export const GroupHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className='mb-6 border-b border-gray-400 pb-2 text-2xl font-bold text-gray-700'>
    {children}
  </h3>
)

export const cardClassName =
  'bg-white p-6 rounded-lg shadow-md text-left flex flex-col h-full'

export interface MetaItem {
  icon: React.ReactNode
  text: string
}

export const MetaLine = ({ items }: { items: MetaItem[] }) => (
  <p className='mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500'>
    {items.map(({ icon, text }) => (
      <span key={text} className='flex items-center gap-1.5'>
        {icon} {text}
      </span>
    ))}
  </p>
)

export const BulletList = ({ bullets }: { bullets: string[] }) => (
  <ul className='list-disc space-y-2 pl-5 leading-relaxed text-gray-700'>
    {bullets.map(bullet => (
      <li key={bullet}>{bullet}</li>
    ))}
  </ul>
)

export interface CardLink {
  label: string
  href: string
  icon?: React.ReactNode
}

export const LinkRow = ({ links }: { links: CardLink[] }) => (
  <div className='mt-4 flex flex-wrap gap-x-6 gap-y-2'>
    {links.map(link => (
      <a
        key={link.href}
        href={link.href}
        target='_blank'
        rel='noopener noreferrer'
        className='relative z-10 inline-flex items-center gap-2 font-medium text-accent-700 hover:underline'
      >
        {link.icon ?? (
          <FaExternalLinkAlt className='text-xs' aria-hidden='true' />
        )}{' '}
        {link.label}
      </a>
    ))}
  </div>
)

export const TagList = ({ tags }: { tags: string[] }) => (
  <div className='mt-auto flex flex-wrap gap-2 pt-4'>
    {tags.map(tag => (
      <span
        key={tag}
        className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'
      >
        {tag}
      </span>
    ))}
  </div>
)

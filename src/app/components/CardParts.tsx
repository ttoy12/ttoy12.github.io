import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Building blocks shared by the Experience and Projects cards so both sections stay visually consistent.

export const GroupHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-bold text-gray-700 mb-6 border-b border-gray-400 pb-2">{children}</h3>
);

export const cardClassName = 'bg-white p-6 rounded-lg shadow-md text-left flex flex-col';

export interface MetaItem {
  icon: React.ReactNode;
  text: string;
}

export const MetaLine = ({ items }: { items: MetaItem[] }) => (
  <p className="text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
    {items.map(({ icon, text }) => (
      <span key={text} className="flex items-center gap-1.5">
        {icon} {text}
      </span>
    ))}
  </p>
);

export const BulletList = ({ bullets }: { bullets: string[] }) => (
  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
    {bullets.map((bullet) => (
      <li key={bullet}>{bullet}</li>
    ))}
  </ul>
);

export interface CardLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export const LinkRow = ({ links }: { links: CardLink[] }) => (
  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-700 font-medium hover:underline"
      >
        {link.icon ?? <FaExternalLinkAlt className="text-xs" aria-hidden="true" />} {link.label}
      </a>
    ))}
  </div>
);

export const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 mt-auto pt-4">
    {tags.map((tag) => (
      <span key={tag} className="bg-gray-100 text-gray-700 text-sm py-1 px-3 rounded-full">
        {tag}
      </span>
    ))}
  </div>
);

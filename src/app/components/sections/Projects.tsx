import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTrophy } from 'react-icons/fa';

type LinkKind = 'live' | 'code' | 'devpost';

interface Project {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  tags: string[];
  links: { kind: LinkKind; href: string }[];
}

const projects: Project[] = [
  {
    title: 'StrikeStack',
    imageSrc: '/strikestack.jpg',
    imageAlt: 'StrikeStack profile page',
    description:
      'A web app for bowlers to manage their ball arsenal, record scores, and analyze performance data to understand their equipment and improve their game.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts', 'Vitest'],
    links: [{ kind: 'live', href: 'https://www.strikestackbowling.com/' }],
  },
  {
    title: 'Link2Me',
    imageSrc: '/link2me_profile.jpg',
    imageAlt: 'Link2Me profile page',
    description:
      'A Linktree-style platform for building and sharing a single profile with all of your social media, payment, and other important links.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'dnd-kit'],
    links: [{ kind: 'live', href: 'https://www.link2me.me/' }],
  },
  {
    title: 'Slots of Flavor',
    imageSrc: '/Slots_of_Flavor_Welcome.jpg',
    imageAlt: 'Slots of Flavor welcome page',
    description:
      'Helps you discover new restaurants by picking a random spot that matches your location and price range.',
    tags: ['Next.js', 'TypeScript', 'Firebase Auth', 'Yelp API'],
    links: [
      { kind: 'live', href: 'https://slots-of-flavor.vercel.app/welcome' },
      { kind: 'code', href: 'https://github.com/ttoy12/Slots-of-Flavor' },
    ],
  },
  {
    title: 'Detective Dollar',
    imageSrc: '/DetectiveDollar/DetectiveDollar2.png',
    imageAlt: 'Detective Dollar app screens',
    description:
      'A cross-platform mobile expense tracker that stores data locally and visualizes spending habits with charts.',
    tags: ['React Native', 'Expo', 'SQLite', 'gifted-charts'],
    links: [{ kind: 'code', href: 'https://github.com/RazrSlyr/DetectiveDollar' }],
  },
  {
    title: 'Yujafiy',
    imageSrc: '/yujafiy.png',
    imageAlt: 'Yujafiy project',
    description:
      'A hackathon project that boosts student engagement by replacing the voices in lecture videos.',
    tags: ['JavaScript', 'Python', 'Flask', 'TopMedia API'],
    links: [
      { kind: 'devpost', href: 'https://devpost.com/software/yujafy' },
      { kind: 'code', href: 'https://github.com/ttoy12/Yujafiy' },
    ],
  },
  {
    title: 'Recipe Helper',
    imageSrc: '/recipe_helper_example.jpg',
    imageAlt: 'Recipe Helper app',
    description: 'Generates recipes from photos of your ingredients. Built at LA Hacks 2024.',
    tags: ['React', 'Gemini API', 'Firebase'],
    links: [
      { kind: 'devpost', href: 'https://devpost.com/software/recipe-help' },
      { kind: 'code', href: 'https://github.com/ttoy12/recipe_helper' },
    ],
  },
];

const linkStyles: Record<LinkKind, { label: string; icon: React.ReactNode; className: string }> = {
  live: {
    label: 'Live Site',
    icon: <FaExternalLinkAlt aria-hidden="true" />,
    className: 'bg-blue-700 text-white hover:bg-blue-800',
  },
  devpost: {
    label: 'Devpost',
    icon: <FaTrophy aria-hidden="true" />,
    className: 'bg-blue-700 text-white hover:bg-blue-800',
  },
  code: {
    label: 'Code',
    icon: <FaGithub aria-hidden="true" />,
    className: 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white',
  },
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-left transition-shadow duration-300 hover:shadow-xl">
    <div className="relative h-56 bg-gray-100">
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-contain p-2"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-gray-700 text-sm py-1 px-3 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        {project.links.map(({ kind, href }) => {
          const { label, icon, className } = linkStyles[kind];
          return (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} ${label}`}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-full font-medium transition-colors duration-300 ${className}`}
            >
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  </article>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

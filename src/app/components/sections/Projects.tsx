import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaExternalLinkAlt, FaGithub, FaTrophy, FaUser, FaUsers } from 'react-icons/fa';
import {
  BulletList,
  CardLink,
  LinkRow,
  MetaItem,
  MetaLine,
  TagList,
  cardClassName,
} from '../CardParts';

interface Project {
  title: string;
  subtitle: string;
  dates: string;
  context: MetaItem;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  tags: string[];
  links: CardLink[];
}

const personal: MetaItem = { icon: <FaUser aria-hidden="true" />, text: 'Personal project' };
const team: MetaItem = { icon: <FaUsers aria-hidden="true" />, text: 'Team project' };
const hackathon = (name: string): MetaItem => ({ icon: <FaTrophy aria-hidden="true" />, text: name });

const live = (href: string): CardLink => ({
  label: 'Live site',
  href,
  icon: <FaExternalLinkAlt className="text-xs" aria-hidden="true" />,
});
const code = (href: string): CardLink => ({ label: 'Code', href, icon: <FaGithub aria-hidden="true" /> });
const devpost = (href: string): CardLink => ({ label: 'Devpost', href, icon: <FaTrophy aria-hidden="true" /> });

// Ordered strongest/most recent first; each card's meta line notes whether it was solo, team, or a hackathon.
const projects: Project[] = [
  {
    title: 'StrikeStack',
    subtitle: 'Bowling arsenal manager',
    dates: 'Apr 2026 – Present',
    context: personal,
    imageSrc: '/strikestack.jpg',
    imageAlt: 'StrikeStack arsenal page',
    bullets: [
      'Lets bowlers organize their bags, track equipment, and record scores and performance stats',
      'Recommends bowling balls with a custom AI suggestion engine',
      'Equipment catalog powered by bowwwl.com data, used with permission',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'Gemini', 'Vitest'],
    links: [live('https://www.strikestackbowling.com/')],
  },
  {
    title: 'Link2Me',
    subtitle: 'Link-in-bio profiles with dynamic QR codes',
    dates: 'Mar 2026 – Present',
    context: personal,
    imageSrc: '/link2me_profile.jpg',
    imageAlt: 'Link2Me profile page',
    bullets: [
      'Users build a customizable profile with their links, bio, and appearance',
      'Generates dynamic QR codes that redirect to the user’s profile',
      'Admin dashboard tracks daily, unique, and total profile views',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'dnd-kit'],
    links: [live('https://www.link2me.me/')],
  },
  {
    title: 'Slots of Flavor',
    subtitle: 'Random restaurant picker',
    dates: 'Sep 2024 – Present',
    context: personal,
    imageSrc: '/Slots_of_Flavor_Welcome.jpg',
    imageAlt: 'Slots of Flavor welcome page',
    bullets: [
      'Spins a slot-machine reel through nearby open restaurants filtered by location, craving, distance, and price',
      'Migrated restaurant search from the Yelp API to the Google Places API and redesigned the app mobile-first',
      'Email and Google sign-in with Firebase Auth; liked and disliked spots saved in Cloud Firestore',
      'Reached 50+ active users',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google Places API'],
    links: [live('https://slots-of-flavor.vercel.app'), code('https://github.com/ttoy12/Slots-of-Flavor')],
  },
  {
    title: 'Recipe Helper',
    subtitle: 'Recipes from photos of your ingredients',
    dates: 'Apr 2024',
    context: hackathon('LA Hacks 2024'),
    imageSrc: '/recipe_helper_example.jpg',
    imageAlt: 'Recipe Helper app',
    bullets: [
      'Generates recipes from ingredient photos using the Gemini API',
      'Hackathon build used React, Material UI, and Firebase',
      'Later rebuilt in Next.js and deployed live',
    ],
    tags: ['React', 'Next.js', 'Gemini API', 'Firebase', 'Material UI'],
    links: [
      live('https://recipe-helper-wine.vercel.app'),
      code('https://github.com/ttoy12/recipe_helper'),
      devpost('https://devpost.com/software/recipe-help'),
    ],
  },
  {
    title: 'Yujafiy',
    subtitle: 'Voice changer for lecture videos',
    dates: 'Jan 2024',
    context: hackathon('CruzHacks 2024'),
    imageSrc: '/yujafiy.png',
    imageAlt: 'Yujafiy Chrome extension',
    bullets: [
      'Chrome extension that swaps the voice in lecture videos to boost student engagement',
      'Built the extension front end, which works with a Flask backend using the TopMedia API for voice modification',
    ],
    tags: ['JavaScript', 'Chrome Extension', 'Python', 'Flask', 'TopMedia API'],
    links: [code('https://github.com/ttoy12/Yujafiy'), devpost('https://devpost.com/software/yujafy')],
  },
  {
    title: 'Detective Dollar',
    subtitle: 'Mobile expense tracker',
    dates: 'Oct 2023 – Dec 2023',
    context: team,
    imageSrc: '/DetectiveDollar/DetectiveDollar2.png',
    imageAlt: 'Detective Dollar app screens',
    bullets: [
      'Cross-platform iOS and Android expense tracker built with Expo',
      'Stores expenses locally with SQLite',
      'Visualizes spending habits with react-native-gifted-charts',
    ],
    tags: ['React Native', 'Expo', 'SQLite', 'gifted-charts'],
    links: [code('https://github.com/RazrSlyr/DetectiveDollar')],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <article className={`${cardClassName} overflow-hidden`}>
    <div className="relative h-60 -mx-6 -mt-6 mb-5 overflow-hidden border-b border-gray-200 bg-gray-800">
      {/* Blurred, zoomed copy fills the frame so non-matching aspect ratios don't leave empty bars */}
      <Image
        src={project.imageSrc}
        alt=""
        aria-hidden="true"
        fill
        sizes="200px"
        className="object-cover scale-125 blur-2xl opacity-80"
      />
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-contain p-4 drop-shadow-2xl"
      />
    </div>

    <div className="mb-4">
      <h4 className="text-xl font-bold text-gray-800">{project.title}</h4>
      <p className="text-gray-700 font-semibold">{project.subtitle}</p>
      <MetaLine items={[{ icon: <FaCalendarAlt aria-hidden="true" />, text: project.dates }, project.context]} />
    </div>

    <BulletList bullets={project.bullets} />
    <LinkRow links={project.links} />
    <TagList tags={project.tags} />
  </article>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

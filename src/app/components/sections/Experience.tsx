import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BulletList, CardLink, GroupHeading, LinkRow, MetaLine, TagList, cardClassName } from '../CardParts';

interface Role {
  company: string;
  title: string;
  dates: string;
  location: string;
  logo?: string;
  /** Text badge shown when there is no logo; defaults to the company's initials */
  badge?: string;
  bullets: string[];
  tags?: string[];
  preview?: { src: string; alt: string };
  links?: CardLink[];
}

interface RoleGroup {
  heading: string;
  roles: Role[];
}

const groups: RoleGroup[] = [
  {
    heading: 'Software Engineering',
    roles: [
      {
        company: 'Uniba Inc.',
        title: 'Web Development Intern',
        dates: 'Jul 2024 – Aug 2024',
        location: 'Tokyo, Japan',
        logo: '/uniba-logo.svg',
        bullets: [
          'Migrated the company website from EJS to Next.js for improved performance',
          'Built the interactive D3.js circle-packing chart that visualizes the company’s team and role structure on uniba.jp',
          'Integrated Pages CMS and built out much of the site’s CMS-driven content',
          'Contributed to the CI pipeline and added front-end testing with Jest and Storybook',
        ],
        tags: ['Next.js', 'D3.js', 'Pages CMS', 'Jest', 'Storybook'],
        links: [{ label: 'View the live chart', href: 'https://uniba.jp/insight/' }],
      },
      {
        company: 'UCSC Police Department',
        title: 'Software Engineering Intern',
        dates: 'Jan 2024 – Jun 2024',
        location: 'Santa Cruz, California',
        badge: 'PD',
        bullets: [
          'Built an inventory management system with advanced search capabilities',
          'Gathered user feedback through Figma prototypes to design a user-centric interface',
          'Automated history tracking for auditing and built a location-based dashboard powered by RFID readers',
        ],
        tags: ['React', 'Material-UI', 'Figma', 'RFID'],
        preview: { src: '/UCSCPD/Item View GIF.gif', alt: 'Demo of the inventory item view' },
      },
    ],
  },
  {
    heading: 'Robotics & AI',
    roles: [
      {
        company: '1X',
        title: 'Data Collection Operator',
        dates: 'Apr 2026 – Present',
        location: 'San Carlos, California',
        logo: '/1X_logo.png',
        bullets: [
          'Teleoperate humanoid robots in household environments to collect training data for robot autonomy',
          'Run model evaluations and test new robot OS builds, reporting regressions and behavior issues to engineering',
          'Execute test plans with engineers and document results to improve robot performance',
          'Design and build realistic household sets for data collection and testing',
          'Perform segmentation, annotation, and quality assurance on collected data',
        ],
      },
      {
        company: 'Labelbox',
        title: 'Robotics Operator',
        dates: 'Dec 2025 – Mar 2026',
        location: 'San Francisco, California',
        logo: '/labelbox_logo.png',
        bullets: [
          'Teleoperated and monitored robotic systems to defined specifications, safety regulations, and quality standards',
          'Maintained detailed operational logs and tracked system performance',
          'Reported anomalies to engineering teams and provided insights for troubleshooting and process improvements',
        ],
      },
      {
        company: 'T & I – AI Coaching & Consulting',
        title: 'Co-Founder & AI Educator',
        dates: 'Jul 2025 – Jan 2026',
        location: 'San Mateo, California',
        logo: '/T-I-logo.png',
        bullets: [
          'Co-founded a coaching practice helping older adults adopt AI tools in their everyday lives',
          'Created beginner-friendly guides and interactive demos introducing chatbots and generative AI platforms',
          'Led one-on-one coaching sessions to integrate AI into clients’ daily routines and workflows',
        ],
      },
    ],
  },
  {
    heading: 'Other',
    roles: [
      {
        company: 'E & F Financial Services, Inc.',
        title: 'Administrative Assistant',
        dates: 'Jun 2022 – Nov 2025',
        location: 'San Mateo, California',
        bullets: [
          'Coordinated meetings and schedules and facilitated communication across teams',
          'Reorganized filing systems and cleared outdated records to improve data accuracy, compliance, and retrieval',
        ],
      },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('');

const RoleCard = ({ role }: { role: Role }) => (
  <article className={cardClassName}>
    <div className="flex items-start gap-4 mb-4">
      {role.logo ? (
        <Image
          src={role.logo}
          alt={`${role.company} logo`}
          height={56}
          width={56}
          className="h-14 w-14 shrink-0 rounded border border-gray-200 object-contain bg-white"
        />
      ) : (
        <div
          className="h-14 w-14 shrink-0 rounded border border-gray-200 bg-gray-800 text-white flex items-center justify-center font-bold"
          aria-hidden="true"
        >
          {role.badge ?? initials(role.company)}
        </div>
      )}
      <div>
        <h4 className="text-xl font-bold text-gray-800">{role.title}</h4>
        <p className="text-gray-700 font-semibold">{role.company}</p>
        <MetaLine
          items={[
            { icon: <FaCalendarAlt aria-hidden="true" />, text: role.dates },
            { icon: <FaMapMarkerAlt aria-hidden="true" />, text: role.location },
          ]}
        />
      </div>
    </div>

    <BulletList bullets={role.bullets} />

    {role.preview && (
      <Image
        unoptimized
        src={role.preview.src}
        alt={role.preview.alt}
        height={400}
        width={400}
        className="mt-4 mx-auto rounded border border-gray-300"
      />
    )}

    {role.links && <LinkRow links={role.links} />}
    {role.tags && <TagList tags={role.tags} />}
  </article>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-gray-300 to-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">Experience</h2>
        {groups.map((group) => (
          <div key={group.heading} className="mb-12 last:mb-0">
            <GroupHeading>{group.heading}</GroupHeading>
            <div className="grid md:grid-cols-2 gap-8">
              {group.roles.map((role) => (
                <RoleCard key={role.company} role={role} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

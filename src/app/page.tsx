"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import DetectiveDollarSlideShow from './components/DetectiveDollarSlideshow';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Developer', 'Problem Solver', 'Collaborative'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-800 text-white p-6 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex space-x-4 absolute md:static w-full md:w-auto left-0 top-full md:top-auto`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 bg-blue-800 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li className="text-xl">
                <Link
                  href="#about"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="text-xl">
                <Link
                  href="#experience"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </Link>
              </li>
              <li className="text-xl">
                <Link
                  href="#projects"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="text-xl">
                <Link
                  href="#contact"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="hero bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center flex flex-col items-center">
            <Image src="/my_photo.jpg" alt="my image" height={800} width={400} className="mb-6" />
            <h2 className="text-4xl font-bold mb-4">Hello, I'm Thomas</h2>
            <h3 className="text-xl font-bold mb-4">
              <span ref={typedElement}></span>
            </h3>
            <p className="text-lg mb-8 w-1/2">I am a recent Computer Science graduate from the University of California, Santa Cruz. I am a Software Engineer with a focus on web development, but would like to also explore new areas.</p>

            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap justify-center mb-8">
              {['C++', 'C', 'Python', 'Node.js', 'JavaScript', 'React', 'Nextjs', 'Expo', 'React Native', 'TypeScript', 'Jest', 'HTML', 'CSS', 'SQL'].map(skill => (
                <span key={skill} className="bg-gray-800 text-white py-2 px-4 m-2 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>

            <a href="https://github.com/ttoy12/Resume/blob/e5a2769dd84580e0870af235cdf59a12f843db9c/ThomasToyResume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Click here to checkout my resume
            </a>
          </div>
        </section>

        <section id="experience" className="bg-gray-300 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">UNIBA INC.</h3>
                <h3 className="text-l text-gray-600 font-semibold">Web Development Intern</h3>
                <h3 className="text-l text-gray-500">July 2024 - August 2024</h3>
                <h3 className="text-l mb-2 text-gray-500">Tokyo, Japan</h3>
                <p className="w-2/3 mx-auto">In this summer internship, I worked at Uniba Inc., a web development agency in Japan. I had a variety of tasks and contributed to the company's CI pipeline. On one of their projects, I transitioned the front-end framework from EJS to Next.js, boosting performance and scalability. To ensure code reliability and UI consistency, I implemented front-end testing with Jest and Storybook. Additionally, I cleaned and transformed data from the Holaspirit API to create an interactive chart using D3.js and integrated and customized Pages CMS for dynamic content management.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">UCSC Police Department</h3>
                <h3 className="text-l text-gray-600 font-semibold">Software Engineering Intern</h3>
                <h3 className="text-l text-gray-500">January 2024 - June 2024</h3>
                <h3 className="text-l mb-2 text-gray-500">Santa Cruz, California</h3>
                <p className="w-2/3 mx-auto">
                During my time at UCSC Police Department, I worked with a team to develop a comprehensive inventory management system with support for advanced search and filtering capabilities. Throughout the project, I collaborated closely with end users, gathering feedback and iteratively refining designs in Figma to create a user-centric interface that is both highly usable and visually appealing. I also worked on making the history tracking page automatic so that it would log all actions taken on inventory items, ensuring a reliable audit trail. To enhance the auditing process, I created a dynamic dashboard for location-based scanning and auditing using RFID readers. Leveraging React.js and Material-UI, I ensured a responsive and intuitive user experience across all pages. Additionally, I implemented RESTful API endpoints using Express, Node.js, and OpenAPI to efficiently manage inventory operations. 
                </p>
              </div>
            </div>
          </div>
        </section>        

        <section id="projects" className="bg-gray-350 py-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <a href="https://github.com/RazrSlyr/DetectiveDollar" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl duration-300">
                  <h3 className="text-xl font-semibold mb-2">Detective Dollar</h3>
                  <div className="flex justify-center items-center">
                    <Image src="/DetectiveDollar/DetectiveDollar2.png" alt="yujafiy" height={400} width={400} className=" mb-4"/>
                    {/* <DetectiveDollarSlideShow/> */}
                  </div>
                  <p className="text-gray-700">Detective Dollar is a cross-platform mobile expense tracker. It was built with Expo Go. Expo Go's SQLite was used to efficiently store, retrieve, and process user-inputted data. React-native-gifted-charts was used to create data visualizations to provide users with insights into their spending habits.</p>
                </div>
              </a>

              <a href="https://devpost.com/software/yujafy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl duration-300">
                  <h3 className="text-xl font-semibold mb-4">Yujafiy</h3>
                  <div className="flex justify-center items-center">
                    <Image src="/yujafiy.png" alt="yujafiy" height={400} width={400} className=" mb-4"/>
                  </div>
                  <p className="text-gray-700">Yujafiy is a project my team worked on for a hackathon. Our idea was to make something to help improve student engagement, and we planned on doing so by replacing the voices for lecture videos. We created a Google Chrome extension and integrated TopMedia API in order to modify the voice of professors in lecture recordings with a user-selected voice. This project was built with javascript, HTML/CSS, flask, python, and TopMedia API.</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/thomas-toy/" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl duration-300">
                  <h3 className="text-xl font-semibold mb-2">In Progres</h3>
                  <div className="flex justify-center items-center">
                    <Image src="/WIP.jpg" alt="work in progress" height={400} width={400} className=" mb-4"/>
                  </div>
                  <p className="text-gray-700">In Progress</p>
                </div>
              </a>              
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <p className="text-lg mb-4">Feel free to get in touch with me through the form below:</p>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg text-black" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg text-black" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg text-black" required></textarea>
              </div>
              <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-lg">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center flex flex-col items-center">
            <div className="flex space-x-6">
              <a href="mailto:thomastoy1415@gmail.com" className="text-white hover:text-gray-400 transition-colors duration-300" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/thomas-toy/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://github.com/ttoy12" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
      </footer>
      
      <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" strategy="beforeInteractive" />
    </div>
  );
};

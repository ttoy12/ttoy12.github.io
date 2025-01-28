import React from 'react';
import '../animations.css';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa'; // Import icons if needed

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-gray-300 to-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800">Experience</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/uniba-logo.svg"
                alt="Uniba Logo"
                height={250}
                width={250}
                className="transition-transform duration-300 transform hover:scale-110 rounded border border-gray-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">UNIBA INC.</h3>
            <h4 className="text-xl text-gray-600 font-semibold mb-1">Web Development Intern</h4>
            <p className="text-gray-500 mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> July 2024 - August 2024 | Tokyo, Japan
            </p>
            <p className="text-gray-700 leading-relaxed">
              During my internship at Uniba Inc., I contributed to the CI pipeline, transitioned the front-end framework from EJS to Next.js for improved performance, and implemented front-end testing with Jest and Storybook. Additionally, I created interactive charts using D3.js and integrated Pages CMS for dynamic content management.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Image
                unoptimized
                src="/UCSCPD/Item View GIF.gif"
                alt="UCSC PD Item View"
                height={400}
                width={400}
                className="transition-transform duration-300 transform hover:scale-110 rounded border border-gray-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">UCSC Police Department</h3>
            <h4 className="text-xl text-gray-600 font-semibold mb-1">Software Engineering Intern</h4>
            <p className="text-gray-500 mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> January 2024 - June 2024 | Santa Cruz, California
            </p>
            <p className="text-gray-700 leading-relaxed">
              At UCSC Police Department, I developed an inventory management system with advanced search capabilities. Collaborating with users, I gathered feedback in Figma to create a user-centric interface. I automated history tracking for auditing and built a location-based dashboard using RFID readers, ensuring a responsive experience with React.js and Material-UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

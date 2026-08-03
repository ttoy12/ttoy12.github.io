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
                src="/1X_logo.png"
                alt="1X logo"
                height={250}
                width={250}
                className="transition-transform duration-300 transform hover:scale-110 rounded border border-gray-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">1X</h3>
            <h4 className="text-xl text-gray-600 font-semibold mb-1">Robotics Operator</h4>
            <p className="text-gray-500 mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> April 2026 - Present | San Carlos, California
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a Robotics Operator/Data Collector at 1X, I teleoperated humanoid robots in household environments to support data collection and robot autonomy development while maintaining safety and quality standards. I performed data labeling, segmentation, and quality assurance, while documenting robot behaviors, tracking system issues, and collaborating with AI and engineering teams to improve workflows and robotic performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/labelbox_logo.png"
                alt="labelbox logo"
                height={250}
                width={250}
                className="transition-transform duration-300 transform hover:scale-110 rounded border border-gray-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Labelbox</h3>
            <h4 className="text-xl text-gray-600 font-semibold mb-1">Robotics Operator</h4>
            <p className="text-gray-500 mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> December 2025 - March 2026 | San Francisco, California
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a Robotics Operator at Labelbox, I teleoperated and monitored robotic systems to ensure operations aligned with defined specifications, safety regulations, and quality standards. I maintained detailed operational logs, tracked system performance, and collaborated with engineering teams by reporting anomalies and providing insights to support troubleshooting, process optimization, and workflow improvements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/T-I-logo.png"
                alt="T&I logo"
                height={250}
                width={250}
                className="transition-transform duration-300 transform hover:scale-110 rounded border border-gray-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">T & I - AI Coaching & Consulting</h3>
            <h4 className="text-xl text-gray-600 font-semibold mb-1">AI Educator</h4>
            <p className="text-gray-500 mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> July 2025 - January 2026 | San Mateo, California
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a Co-Founder of T & I - AI Coaching & Consulting, I developed a personal passion project focused on helping older adults explore and adopt artificial intelligence tools in their everyday lives. I created beginner-friendly guides and interactive demonstrations to introduce clients to chatbots and various generative AI platforms, while providing personalized one-on-one coaching sessions to help them integrate AI into their daily routines and workflows.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Image
                src=""
                alt=""
                height={250}
                width={250}
                className="transition-transform duration-300 transform hover:scale-110 rounded border border-gray-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">E & F Financial Services, Inc.</h3>
            <h4 className="text-xl text-gray-600 font-semibold mb-1">Administrative Assistant</h4>
            <p className="text-gray-500 mb-4 flex items-center justify-center">
              <FaCalendarAlt className="mr-2" /> June 2022 - November 2025 | San Mateo, California
            </p>
            <p className="text-gray-700 leading-relaxed">
              During my time as an Administrative Assistant at E & F Financial Services, Inc., I supported daily operations by coordinating meetings, managing schedules, and facilitating seamless communication across teams. I organized and maintained filing systems to improve document accessibility and data retrieval, while reviewing and clearing outdated records to enhance data accuracy, compliance, and overall efficiency. Additionally, I drafted and formatted professional emails, ensuring clear and effective business communication.
            </p>
          </div>
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

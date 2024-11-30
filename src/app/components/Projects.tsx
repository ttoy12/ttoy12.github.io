import React from 'react';
import Image from 'next/image';
import './animations.css';

interface ProjectItemProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, imageSrc, imageAlt, description, link }) => {
  const handleButtonClick = () => {
    window.open(link, '_blank', 'noopener, noreferrer');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <div className="flex justify-center items-center mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={350}
            width={350}
            className="transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
      <button
        onClick={handleButtonClick}
        className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
        View Project
      </button>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem
            title="Slots of Flavor"
            imageSrc="/Slots_of_Flavor_Welcome.jpg"
            imageAlt="Slots of Flavor Welcome page"
            description="Slots of Flavor is a web application designed to help people explore new restaurants. It takes in a few parameters like location and price, and will return a random restaurant that fits these parameters. This was built using Next.js with TypeScript, Firebase for user authentication, and Yelp API for restaurant data."
            link="https://slots-of-flavor.vercel.app/welcome"
          />

          <ProjectItem
            title="Detective Dollar"
            imageSrc="/DetectiveDollar/DetectiveDollar2.png"
            imageAlt="Detective Dollar app"
            description="Detective Dollar is a cross-platform mobile expense tracker built with Expo Go. It uses SQLite to store user data efficiently and React-native-gifted-charts for visualizing spending habits."
            link="https://github.com/RazrSlyr/DetectiveDollar"
          />

          <ProjectItem
            title="Yujafiy"
            imageSrc="/yujafiy.png"
            imageAlt="Yujafiy project"
            description="Yujafiy is a hackathon project aimed at improving student engagement by replacing lecture video voices. Built with JavaScript, HTML/CSS, Flask, and Python, it integrates TopMedia API for voice modification."
            link="https://devpost.com/software/yujafy"
          />

          <ProjectItem
            title="Recipe Helper"
            imageSrc="/recipe_helper_example.jpg"
            imageAlt="Recipe Helper app"
            description="Recipe Helper is a web app that generates recipes based on ingredient photos. Developed during LA Hacks 2024, it utilizes React, Gemini API, and Firebase."
            link="https://devpost.com/software/recipe-help"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

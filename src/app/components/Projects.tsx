import React from 'react'
import Image from 'next/image'
import DetectiveDollarSlideShow from './DetectiveDollarSlideshow'

const Projects = () => {
  return (
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
  )
}

export default Projects
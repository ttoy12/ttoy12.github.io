import React from 'react'

const Experience = () => {
  return (
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
  )
}

export default Experience
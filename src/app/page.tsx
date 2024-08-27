// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white p-6 fixed top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="text-xl">
                <Link
                  href="#about"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500 pb-1"
                >
                  About
                </Link>
              </li>
              <li className="text-xl">
                <Link
                  href="#projects"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500 pb-1"
                >
                  Projects
                </Link>
              </li>
              <li className="text-xl">
                <Link
                  href="#contact"
                  className="px-3 py-2 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-500 pb-1"
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
            <p className="text-lg mb-8">I am a Software Engineer. Welcome to my portfolio!</p>
            <Link href="#projects">View My Work</Link>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                <p className="text-gray-700">Description of project 1.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                <p className="text-gray-700">Description of project 2.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                <p className="text-gray-700">Description of project 3.</p>
              </div>
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
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
        </div>
      </footer>
    </div>
  )
}

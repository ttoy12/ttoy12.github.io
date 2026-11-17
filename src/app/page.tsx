import Header from './components/sections/Header'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Gallery from './components/sections/Gallery'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900'>
      {/* First tab stop on the page; invisible until focused */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-gray-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500'
      >
        Skip to main content
      </a>
      <Header />

      <main id='main-content' tabIndex={-1} className='focus:outline-none'>
        <About />
        <Projects />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

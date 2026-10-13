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
      <Header />

      <main id='main-content'>
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

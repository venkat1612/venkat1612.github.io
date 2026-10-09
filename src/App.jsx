import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import content from './content.json'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = content.site.title
    if (content.site.accentColor) {
      document.documentElement.style.setProperty('--accent', content.site.accentColor)
    }
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })
  }, [])

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default App

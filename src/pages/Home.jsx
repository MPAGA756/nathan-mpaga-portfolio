import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Vision from '../components/sections/Vision'
import Contact from '../components/sections/Contact'

function Home() {
  const location = useLocation()

  useEffect(() => {
    // React Router ne scroll pas automatiquement vers les ancres (#projects, etc.)
    // lors d'une navigation interne — on le gère nous-mêmes ici.
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        // Léger délai pour laisser le temps aux sections de se monter
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>
      <section id="about" className="py-24 md:py-32">
        <About />
      </section>
      <section id="projects" className="py-24 md:py-32">
        <Projects />
      </section>
      <section id="skills" className="py-24 md:py-32">
        <Skills />
      </section>
      <section id="vision" className="py-24 md:py-32">
        <Vision />
      </section>
      <section id="contact" className="py-24 md:py-32">
        <Contact />
      </section>
    </>
  )
}

export default Home

import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

// Chargées à la demande : pas nécessaires au premier rendu de la home
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

const FORM_ENDPOINT = 'https://formspree.io/f/xljdjdwl'
const VISITED_KEY = 'portfolio_visited'

function App() {
  useEffect(() => {
    // Notifie une seule fois par visiteur (par navigateur), pas à chaque visite.
    try {
      if (localStorage.getItem(VISITED_KEY)) return

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Nouveau visiteur sur le portfolio',
          message: 'Un nouveau visiteur unique a consulté ton portfolio.',
          page: window.location.href,
          referrer: document.referrer || 'Accès direct',
        }),
      }).catch(() => {})

      localStorage.setItem(VISITED_KEY, 'true')
    } catch {
      // localStorage indisponible (navigation privée stricte, etc.) — on ignore silencieusement
    }
  }, [])

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App

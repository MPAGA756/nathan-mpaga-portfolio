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
    let timer

    // Jamais de notification en local : ça évite de polluer le classificateur
    // anti-spam de Formspree avec des tests répétés au contenu identique —
    // c'est ce qui a fait flaguer ce formulaire pendant le développement.
    const isLocal =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    if (isLocal) return

    try {
      if (localStorage.getItem(VISITED_KEY)) return

      // Envoi différé de quelques secondes, plutôt qu'à 0ms après le
      // chargement — signal moins "automatisé" pour le filtre anti-spam,
      // et ça filtre en prime les visiteurs qui repartent instantanément.
      timer = setTimeout(() => {
        const data = new FormData()
        data.append('_subject', 'Nouveau visiteur sur le portfolio')
        data.append('email', 'notification@nathan-mpaga-portfolio.app')
        data.append(
          'message',
          `Un nouveau visiteur unique a consulté ton portfolio le ${new Date().toLocaleString('fr-FR')}.`
        )
        data.append('page', window.location.href)
        data.append('referrer', document.referrer || 'Accès direct')

        fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        }).catch(() => {})

        localStorage.setItem(VISITED_KEY, 'true')
      }, 5000)
    } catch {
      // localStorage indisponible (navigation privée stricte, etc.) — on ignore silencieusement
    }

    return () => clearTimeout(timer)
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

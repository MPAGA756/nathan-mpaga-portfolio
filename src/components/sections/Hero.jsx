import GlowBackground from '../ui/GlowBackground'
import RevealOnScroll from '../ui/RevealOnScroll'
import Button from '../ui/Button'

const QUICK_FACTS = ['AI', 'WEB', 'MOBILE', 'INNOVATION']

function Hero() {
  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-0 overflow-hidden">
      <GlowBackground position="top-right" size="lg" intensity="medium" />

      <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Colonne texte */}
        <RevealOnScroll>
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-6">
              AI Developer / Digital Builder
            </p>

            <h1 className="font-display font-semibold text-display leading-[1.05] tracking-tight text-text-primary mb-6">
              Building intelligent experiences for the digital future.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-md">
              Je transforme des idées et des problématiques en expériences et
              solutions numériques modernes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button as="a" href="#projects" variant="primary">
                Explorer mes projets
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Colonne photo */}
        <RevealOnScroll delay={150}>
          <div className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border bg-gradient-to-br from-surface to-bg-secondary">
              {/*
                IMPORTANT : place ta photo dans public/profile/hero-portrait.jpeg
                (dossier "public" à la racine du projet, pas dans src/).
                Tant qu'elle n'y est pas, ce dégradé s'affiche à la place —
                le site ne plante pas.
              */}
              <img
                src="/profile/hero-portrait.jpeg"
                alt="Nathan Mpaga, AI Developer"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
            </div>

            <ul className="absolute bottom-6 left-6 font-mono text-[11px] tracking-[0.1em] uppercase text-text-secondary space-y-1">
              {QUICK_FACTS.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}

export default Hero

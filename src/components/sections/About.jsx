import SectionHeading from '../ui/SectionHeading'
import RevealOnScroll from '../ui/RevealOnScroll'

const QUICK_FACTS = [
  { label: 'AI', sublabel: 'Field of study' },
  { label: 'WEB', sublabel: 'Development' },
  { label: 'MOBILE', sublabel: 'Applications' },
  { label: 'DIGITAL', sublabel: 'Innovation' },
]

function About() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="About"
          title="More than a developer. A digital builder."
        />
      </RevealOnScroll>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <RevealOnScroll>
          <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
            Je suis Nathan Mpaga, étudiant et passionné par l'Intelligence
            Artificielle et les technologies numériques. Je m'intéresse
            particulièrement à la création de produits numériques, aux
            applications intelligentes et aux solutions technologiques
            capables de résoudre des problèmes concrets.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <p className="font-display font-semibold text-2xl text-text-primary mb-1">
                  {fact.label}
                </p>
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-muted">
                  {fact.sublabel}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}

export default About

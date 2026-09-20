import GlowBackground from '../ui/GlowBackground'
import RevealOnScroll from '../ui/RevealOnScroll'
import Button from '../ui/Button'
import TextLink from '../ui/TextLink'
import GithubIcon from '../ui/GithubIcon'

const EMAIL = 'mpagamederique@gmail.com'
const GITHUB_URL = 'https://github.com/MPAGA756'

function Contact() {
  return (
    <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-20 overflow-hidden">
      <GlowBackground position="bottom" size="md" intensity="subtle" />

      <RevealOnScroll className="relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-6">
            Get in touch
          </p>
          <h2 className="font-display font-semibold text-display leading-[1.05] text-text-primary mb-6">
            Have an idea?
            <br />
            Let's build something.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-10 max-w-md mx-auto">
            Que ce soit pour un projet, une opportunité ou simplement échanger
            autour de la technologie, n'hésite pas à me contacter.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button as="a" href={`mailto:${EMAIL}`} variant="primary">
              {EMAIL}
            </Button>
            <TextLink href={GITHUB_URL}>
              <GithubIcon size={14} />
              GitHub
            </TextLink>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )
}

export default Contact

import GlowBackground from '../ui/GlowBackground'
import RevealOnScroll from '../ui/RevealOnScroll'

function Vision() {
  return (
    <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-20 overflow-hidden">
      <GlowBackground position="center" size="md" intensity="subtle" />

      <RevealOnScroll className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-semibold text-h1 leading-tight text-text-primary mb-8">
            Technology should not only work.
            <br />
            It should create possibilities.
          </p>
          <p className="text-text-secondary leading-relaxed max-w-xl mx-auto">
            Je crois que la technologie prend tout son sens lorsqu'elle sert un
            véritable objectif : simplifier, connecter, résoudre. Mon approche
            consiste à allier rigueur technique et sens du détail pour
            construire des produits numériques utiles autant qu'agréables à
            utiliser.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  )
}

export default Vision

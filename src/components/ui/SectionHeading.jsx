/**
 * Titre de section standardisé — eyebrow (mono) + titre (display) + description optionnelle.
 * Garantit la cohérence typographique entre toutes les sections.
 */
function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl mb-16 ${alignment}`}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-semibold text-h1 leading-tight text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary leading-relaxed">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading

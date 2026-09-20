import { ArrowUpRight } from 'lucide-react'

/**
 * Lien éditorial léger (ex. "GitHub ↗", "Live Demo ↗").
 * Pas une 3e variante de bouton — un style de lien à part, plus discret.
 */
function TextLink({ href, children, external = true, className = '', ...props }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-text-primary border-b border-transparent hover:border-accent transition-colors duration-200 ${className}`}
      {...props}
    >
      <span className="inline-flex items-center gap-1.5">{children}</span>
      <ArrowUpRight
        size={13}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}

export default TextLink

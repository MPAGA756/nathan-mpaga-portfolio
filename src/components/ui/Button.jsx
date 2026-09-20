const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-medium font-sans transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const VARIANTS = {
  primary:
    'bg-accent text-text-primary hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--color-accent-glow)] active:translate-y-0',
  secondary:
    'border border-border text-text-primary hover:border-accent active:opacity-90',
}

/**
 * Bouton à 2 variantes uniquement (primary / secondary), conforme au
 * Design System validé. Pas de 3e variante sans revalidation.
 * `as="a"` permet de l'utiliser comme lien (ex. ancre de scroll, GitHub).
 */
function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <Component className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Component>
  )
}

export default Button

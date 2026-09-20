const POSITION_CLASSES = {
  'top-right': 'top-0 right-0 -translate-y-1/4 translate-x-1/4',
  'top-left': 'top-0 left-0 -translate-y-1/4 -translate-x-1/4',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3',
}

const SIZE_CLASSES = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[700px] h-[700px]',
}

const INTENSITY_CLASSES = {
  subtle: 'opacity-40',
  medium: 'opacity-70',
}

/**
 * Halo lumineux violet, réutilisable et paramétrable.
 * Réservé aux grandes compositions : Hero, Vision, Contact.
 * Ne pas utiliser dans les grilles répétées (ex. Project Cards).
 */
function GlowBackground({ position = 'top-right', size = 'md', intensity = 'subtle' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none rounded-full blur-[100px] bg-accent-glow-strong ${POSITION_CLASSES[position]} ${SIZE_CLASSES[size]} ${INTENSITY_CLASSES[intensity]}`}
    />
  )
}

export default GlowBackground

/**
 * Tag technologie (JetBrains Mono), utilisé dans les cartes projet.
 */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-wide uppercase text-text-secondary">
      {children}
    </span>
  )
}

export default Badge

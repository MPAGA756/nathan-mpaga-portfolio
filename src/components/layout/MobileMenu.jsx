import { X } from 'lucide-react'
import { Link } from 'react-router'

function MobileMenu({ isOpen, onClose, links }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] bg-[#080808] flex flex-col md:hidden">
      <div className="flex items-center justify-end px-6 h-20">
        <button onClick={onClose} aria-label="Fermer le menu">
          <X size={24} />
        </button>
      </div>
      <ul className="flex-1 flex flex-col items-center justify-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={`/${link.href}`} onClick={onClose} className="text-2xl tracking-wide">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu

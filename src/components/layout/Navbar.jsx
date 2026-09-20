import { useState } from 'react'
import { Link } from 'react-router'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#080808]/80 border-b border-white/[0.08]">
      <nav className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-medium tracking-wide text-sm">
          NATHAN MPAGA
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={`/${link.href}`}
                className="text-sm tracking-wide text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-[#F5F5F5]"
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  )
}

export default Navbar

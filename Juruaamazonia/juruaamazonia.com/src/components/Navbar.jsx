import { useState, useEffect } from 'react'
import logo from '../../assets/brand/jurua-logo_1.svg'
import { copy } from '../content/copy'

const navLinks = [
  { label: 'Serviços',       href: '#servicos' },
  { label: 'Como funciona',  href: '#como-funciona' },
  { label: 'Estrutura',      href: '#estrutura' },
  { label: 'Contato',        href: '#contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-sm' : 'border-b border-border-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" aria-label="Juruá Log — início">
            <img src={logo} alt="Juruá Log" className="h-32 w-auto" />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-main text-sm font-medium hover:text-brand-green transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center bg-brand-green text-white text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-green-dark transition-colors duration-200"
          >
            {copy.hero.ctaPrimary}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          >
            <span className={`block h-0.5 bg-gray-800 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border-light px-6 py-5 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-text-main font-medium border-b border-border-light last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-brand-green text-white font-semibold px-5 py-3 rounded-md hover:bg-brand-green-dark transition-colors"
            >
              {copy.hero.ctaPrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

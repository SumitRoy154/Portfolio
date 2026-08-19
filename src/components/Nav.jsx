import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'

const RESUME_URL = 'https://drive.google.com/drive/folders/1quhmqo79982UtM4MhqWUjGmduYROzuKm'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Exp.', to: 'experience' },
  { label: 'Certif.', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // scroll-spy
      const sections = navLinks.map((l) => document.getElementById(l.to))
      let current = ''
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120) current = section.id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
        className={`hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-20 flex-col items-center py-8 transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/90 backdrop-blur-md border-r border-gold/10'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-syne font-extrabold text-2xl text-ivory hover:text-gold transition-colors duration-200 cursor-pointer mb-12"
          aria-label="Scroll to top"
        >
          SR
        </button>

        {/* Vertical links */}
        <div className="flex flex-col items-center gap-8 flex-1">
          {navLinks.map((link) => (
            <div key={link.to} className="relative flex items-center">
              <button
                onClick={() => scrollTo(link.to)}
                className="text-sm font-medium tracking-wide text-ivory/70 hover:text-ivory transition-colors duration-200 cursor-pointer group"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(360deg)' }}
                title={link.label}
              >
                {link.label}
              </button>
              {/* Active/hover indicator */}
              <span
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-px bg-gold transition-all duration-300 ${
                  activeSection === link.to ? 'h-8' : 'h-0 group-hover:h-8'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Resume */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gold border border-gold/40 p-2 rounded-full hover:bg-gold/10 transition-all duration-200"
          title="Resume"
        >
          <FileText size={16} />
        </a>
      </motion.nav>

      {/* Mobile Header */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-extrabold text-xl text-ivory hover:text-gold transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            SR
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-ivory p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-canvas/95 backdrop-blur-md border-t border-gold/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.to}
                    onClick={() => scrollTo(link.to)}
                    className={`text-left text-sm font-medium py-2 transition-colors cursor-pointer ${
                      activeSection === link.to ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-gold border border-gold/40 px-4 py-2 rounded-full hover:bg-gold/10 transition-all duration-200 w-fit"
                >
                  <FileText size={14} />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Nav

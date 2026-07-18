import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'

const RESUME_URL = 'https://drive.google.com/file/d/1la6nlzfU-yDBqejVBzgg7jGqQBpjbf9x/view?usp=sharing'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Certificates', to: 'certificates' },
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
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-syne font-extrabold text-xl text-ivory hover:text-gold transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to top"
        >
          SR
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => scrollTo(link.to)}
              className="relative text-sm font-medium tracking-wide text-ivory/70 hover:text-ivory transition-colors duration-200 cursor-pointer group"
            >
              {link.label}
              {/* Hover underline */}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                  activeSection === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}

          {/* Resume */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-gold border border-gold/40 px-4 py-1.5 rounded-full hover:bg-gold/10 transition-all duration-200"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ivory p-1 cursor-pointer"
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
            className="md:hidden bg-canvas/95 backdrop-blur-md border-t border-gold/10 overflow-hidden"
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
  )
}

export default Nav

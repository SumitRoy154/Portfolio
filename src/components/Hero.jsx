import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }

  const wordAnim = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const nameWords = ['Sumit', 'Roy']

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-canvas overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-gold text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6"
        >
          AI/ML Engineer · Full-Stack Developer
        </motion.p>

        {/* Name */}
        <div className="overflow-hidden mb-6">
          <div className="flex justify-center gap-4 sm:gap-6">
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnim}
                className="font-syne font-extrabold text-ivory text-5xl sm:text-7xl lg:text-8xl tracking-tight"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-ivory-dim text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Computer Science undergraduate building AI-driven computer vision
          systems and scalable full-stack applications.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center justify-center gap-2 bg-ivory text-canvas font-semibold text-sm px-7 py-3 rounded-full hover:scale-[1.02] hover:brightness-110 transition-all duration-200 cursor-pointer"
          >
            Get in Touch
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold font-semibold text-sm px-7 py-3 rounded-full hover:bg-gold/10 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            View Projects
            <ExternalLink size={14} />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gold/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

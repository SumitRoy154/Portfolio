import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'

const SCRAMBLE_CHARS = '!@#$^&*+?/<>{}'
const NAME = 'Sumit Roy'
const SCRAMBLE_DURATION = 1500
const SCRAMBLE_INTERVAL_MS = 40
const RESUME_PATH = '/assets/SumitRoy_Resume.pdf'

const useTextScramble = (text, duration = SCRAMBLE_DURATION) => {
  const prefersReducedMotion = useReducedMotion()
  const [displayText, setDisplayText] = useState(prefersReducedMotion ? text : '')

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text)
      return undefined
    }

    const characters = text.split('')
    const revealableCharacters = characters.reduce(
      (count, character) => count + (character === ' ' ? 0 : 1),
      0,
    )

    let intervalId = 0
    const startTime = window.performance.now()

    const scrambleFrame = () =>
      characters
        .map((character, index) => {
          if (character === ' ') {
            return ' '
          }

          const normalizedPosition = (index + 1) / characters.length
          const progress = Math.min((window.performance.now() - startTime) / duration, 1)
          const revealGate = Math.pow(progress, 2.9)

          if (revealGate >= normalizedPosition) {
            return character
          }

          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        })
        .join('')

    const tick = () => {
      const progress = Math.min((window.performance.now() - startTime) / duration, 1)

      setDisplayText(scrambleFrame())

      if (progress >= 1) {
        window.clearInterval(intervalId)
        setDisplayText(text)
      }
    }

    setDisplayText(scrambleFrame())
    intervalId = window.setInterval(tick, SCRAMBLE_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [prefersReducedMotion, text])

  return displayText
}

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()
  const scrambledName = useTextScramble(NAME)

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

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-canvas text-ivory"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(229,231,235,0.05),_transparent_30%),linear-gradient(to_bottom,_rgba(255,255,255,0.02),_transparent_24%)]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/[0.03] px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-gold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_16px_rgba(212,175,55,0.75)]" />
              OPEN TO FULL-TIME & INTERNSHIP OPPORTUNITIES — 2026
            </motion.div>

            <motion.h1
              variants={wordAnim}
              className="max-w-3xl text-balance font-normal tracking-[-0.06em] text-5xl leading-[0.95] text-ivory sm:text-7xl lg:text-8xl"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold to-ivory">
                {scrambledName}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-ivory-dim sm:text-base"
            >
              Full-Stack Developer &amp; AI/ML Engineer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-pretty text-base leading-7 text-ivory-dim sm:text-lg"
            >
              I build production-grade computer vision and full-stack systems,
              from PyTorch models to React interfaces, with a focus on clean
              architecture and real-world performance.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-7 py-3 text-sm font-semibold text-canvas transition-transform duration-200 hover:scale-[1.02]"
              >
                Get in Touch
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-white/[0.02] px-7 py-3 text-sm font-semibold text-gold transition-colors duration-200 hover:bg-gold/10"
              >
                View Projects
                <ExternalLink size={14} />
              </button>
              <a
                href={RESUME_PATH}
                download="Sumit_Roy_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gradient-to-r from-gold via-[#f2cf67] to-gold px-7 py-3 text-sm font-semibold text-canvas transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
              >
                Resume
                <Download size={14} />
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs uppercase tracking-[0.3em] text-ivory-dim">
                <span>Signal</span>
                <span>Night Mode</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="grid grid-cols-2 gap-4 text-sm text-ivory-dim">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-gold text-xs uppercase tracking-[0.25em]">Focus</p>
                    <p className="mt-2 text-ivory">AI, web systems, and clean interfaces</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-gold text-xs uppercase tracking-[0.25em]">Stack</p>
                    <p className="mt-2 text-ivory">React, Tailwind, motion, and backend logic</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-gold/15 bg-gradient-to-br from-gold/10 via-white/[0.02] to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">Current mode</p>
                  <p className="mt-3 text-sm leading-7 text-ivory-dim">
                    Building polished products with a restrained cyberpunk aesthetic:
                    high contrast, subtle glow, and motion that feels intentional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero

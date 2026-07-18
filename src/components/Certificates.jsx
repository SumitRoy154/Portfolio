import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection, { MotionChild } from './AnimatedSection'
import { Award, Trophy, Users, Zap, Medal } from 'lucide-react'

const certificates = [
  { title: 'MATLAB Course', subtitle: 'Certification', icon: <Award size={20} className="text-gold" /> },
  { title: 'CSI Coding Essentials', subtitle: 'Certification', icon: <Zap size={20} className="text-gold" /> },
  { title: 'Modern Sensors Technology & Industrial Applications', subtitle: 'Certification', icon: <Medal size={20} className="text-gold" /> },
]

const achievements = [
  { icon: <Users size={16} className="text-gold/70" />, text: 'Participated in Smart India Hackathon and Mumbai Hacks Hackathon' },
  { icon: <Trophy size={16} className="text-gold/70" />, text: 'Led a 13-member team building an AI-based Library Management System (NLP mini project) — awarded full evaluation marks' },
  { icon: <Zap size={16} className="text-gold/70" />, text: 'Attended E-Summit\'25 at IIT Bombay' },
  { icon: <Medal size={16} className="text-gold/70" />, text: '1st Rank — Alegria Treasure Hunt · 3rd Rank — Ad Mad Competition · 2nd Rank — Collegiate Throwball and Collegiate Basketball' },
]

const Certificates = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="certificates" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <MotionChild>
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            04 — Certificates & Achievements
          </p>
        </MotionChild>

        <MotionChild>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ivory mb-12 tracking-tight">
            Recognition
          </h2>
        </MotionChild>

        {/* Certificate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {certificates.map((cert) => (
            <MotionChild key={cert.title}>
              <motion.div
                className="border border-gold/10 rounded-2xl p-6 bg-canvas-light/30 group"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -3,
                        borderColor: 'rgba(212, 175, 55, 0.25)',
                        boxShadow: '0 0 24px rgba(212, 175, 55, 0.05)',
                      }
                }
                transition={{ duration: 0.25 }}
              >
                <div className="p-2.5 rounded-xl bg-gold/[0.08] border border-gold/15 w-fit mb-4">
                  {cert.icon}
                </div>
                <h3 className="font-syne font-bold text-base text-ivory mb-1 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-ivory-dim text-xs">{cert.subtitle}</p>
              </motion.div>
            </MotionChild>
          ))}
        </div>

        {/* Achievements */}
        <MotionChild>
          <h3 className="font-syne font-bold text-xl text-ivory mb-6">Achievements</h3>
        </MotionChild>

        <div className="space-y-3">
          {achievements.map((item, i) => (
            <MotionChild key={i}>
              <div className="flex items-start gap-3 py-2">
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <p className="text-ivory-dim text-sm leading-relaxed">{item.text}</p>
              </div>
            </MotionChild>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Certificates

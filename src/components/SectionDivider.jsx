import { motion, useReducedMotion } from 'framer-motion'

const SectionDivider = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        className="h-px bg-gold/30"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  )
}

export default SectionDivider

import AnimatedSection, { MotionChild } from './AnimatedSection'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <MotionChild>
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            03 — Experience
          </p>
        </MotionChild>

        <MotionChild>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ivory mb-12 tracking-tight">
            Professional Experience
          </h2>
        </MotionChild>

        {/* Timeline */}
        <MotionChild>
          <div className="relative pl-8 sm:pl-12">
            {/* Vertical gold line */}
            <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gold/20" />

            {/* Timeline dot */}
            <div className="absolute left-1.5 sm:left-3.5 top-2 w-3 h-3 rounded-full border-2 border-gold bg-canvas z-10" />

            <div className="border border-gold/10 rounded-2xl p-6 sm:p-8 bg-canvas-light/30">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gold/[0.08] border border-gold/15 shrink-0">
                  <Briefcase size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-lg sm:text-xl text-ivory tracking-tight">
                    Computer Vision Intern
                  </h3>
                  <p className="text-ivory-dim text-sm">
                    Pillai College of Engineering — Panvel, Maharashtra
                  </p>
                  <p className="text-gold/70 text-xs mt-1 font-medium tracking-wide uppercase">
                    Dec 2024 – Jan 2025
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 mb-5">
                <li className="text-ivory-dim text-sm leading-relaxed flex gap-2">
                  <span className="text-gold/50 mt-1.5 shrink-0">▸</span>
                  <span>
                    Developed an end-to-end computer vision pipeline for automated manufacturing drawing analysis, enabling intelligent dimension detection and classification across complex technical diagrams.
                  </span>
                </li>
                <li className="text-ivory-dim text-sm leading-relaxed flex gap-2">
                  <span className="text-gold/50 mt-1.5 shrink-0">▸</span>
                  <span>
                    Built a robust entity detection system using image processing and OCR, incorporating preprocessing stages — grayscale conversion, adaptive thresholding, and morphological operations — to achieve high-accuracy text extraction.
                  </span>
                </li>
                <li className="text-ivory-dim text-sm leading-relaxed flex gap-2">
                  <span className="text-gold/50 mt-1.5 shrink-0">▸</span>
                  <span>
                    Engineered classification algorithms to distinguish dimension types (diameter, radius, linear) and implemented bounding-box visualizations with labeled outputs; applied edge detection techniques for structural analysis.
                  </span>
                </li>
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {['Python', 'OpenCV', 'Tesseract OCR'].map((tag) => (
                  <span
                    key={tag}
                    className="text-gold/80 text-xs border border-gold/20 bg-gold/[0.04] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionChild>
      </div>
    </AnimatedSection>
  )
}

export default Experience

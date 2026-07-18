import { motion, useReducedMotion } from 'framer-motion'
import AnimatedSection, { MotionChild } from './AnimatedSection'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons'

const projects = [
  {
    title: 'AI-Powered Knowledge Navigator Agent',
    date: 'Dec 2025',
    tags: ['React', 'FastAPI', 'Python', 'Docker'],
    bullets: [
      'Architected a full-stack AI agent leveraging LLM-based pipelines and semantic retrieval to deliver context-aware, domain-specific responses.',
      'Engineered a modular FastAPI backend with clean API routing, Pydantic schema validation, and scalable service-layer architecture.',
      'Implemented intelligent course discovery and personalized learning roadmap generation, significantly boosting recommendation relevance.',
      'Built a responsive React chat interface and optimized backend throughput with Docker containerization and async request handling.',
    ],
    github: 'https://github.com/SumitRoy154',
  },
  {
    title: 'EventTree',
    date: 'Apr 2025',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    bullets: [
      'Developed a comprehensive event management platform with granular Role-Based Access Control spanning Admin, Committee, and Student tiers.',
      'Built the full event lifecycle — creation, scheduling, registration, attendance tracking, and participation-based reward distribution.',
      'Designed a centralized admin dashboard with data-rich visualizations, responsive UI, and performant backend APIs for relational data.',
    ],
    github: 'https://github.com/SumitRoy154',
  },
]

const Projects = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedSection id="projects" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <MotionChild>
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            02 — Projects
          </p>
        </MotionChild>

        <MotionChild>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ivory mb-12 tracking-tight">
            Featured Work
          </h2>
        </MotionChild>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <MotionChild key={project.title}>
              <motion.div
                className="h-full border border-gold/10 rounded-2xl p-6 sm:p-8 bg-canvas-light/30 group cursor-default flex flex-col"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -4,
                        borderColor: 'rgba(212, 175, 55, 0.3)',
                        boxShadow: '0 0 30px rgba(212, 175, 55, 0.06)',
                      }
                }
                transition={{ duration: 0.25 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-ivory mb-1 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-ivory-dim text-xs">{project.date}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/40 hover:text-gold transition-colors p-1"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitHubIcon size={20} />
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gold/80 text-xs border border-gold/20 bg-gold/[0.04] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 flex-1">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-ivory-dim text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-gold/50 mt-1.5 shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </MotionChild>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Projects

import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import AnimatedSection, { MotionChild } from './AnimatedSection'
import { ExternalLink, X } from 'lucide-react'
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
    description: 'Full-stack AI agent with LLM-based pipelines for context-aware responses.',
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
    description: 'Event management platform with role-based access control and analytics.',
    github: 'https://github.com/SumitRoy154',
  },
]

const Projects = () => {
  const prefersReducedMotion = useReducedMotion()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
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
                  className="h-full border border-gold/10 rounded-2xl overflow-hidden bg-canvas-light/30 group cursor-default flex flex-col"
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
                  {/* Image container - white box placeholder */}
                  <div className="w-full h-48 bg-ivory/10 border-b border-gold/10" />
                  
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-syne font-bold text-lg text-ivory tracking-tight">
                        {project.title}
                      </h3>
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
                    
                    <p className="text-ivory-dim text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Details button */}
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-2 bg-gold/10 text-gold border border-gold/30 font-medium text-sm px-4 py-2 rounded-full hover:bg-gold/20 transition-all duration-200 cursor-pointer"
                    >
                      Details
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              </MotionChild>
            ))}
          </div>

          {/* View More button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/SumitRoy154"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-canvas font-semibold text-sm px-8 py-3 rounded-full hover:scale-[1.02] hover:brightness-110 transition-all duration-200 cursor-pointer"
            >
              View More
              <GitHubIcon size={16} />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-canvas/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-canvas-light border border-gold/20 rounded-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-ivory/40 hover:text-gold transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-syne font-bold text-2xl text-ivory mb-1 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-ivory-dim text-sm">{selectedProject.date}</p>
                </div>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/40 hover:text-gold transition-colors p-1"
                  aria-label={`View ${selectedProject.title} on GitHub`}
                >
                  <GitHubIcon size={24} />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gold/80 text-xs border border-gold/20 bg-gold/[0.04] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {selectedProject.bullets.map((bullet, i) => (
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects

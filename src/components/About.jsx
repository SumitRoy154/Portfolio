import AnimatedSection, { MotionChild } from './AnimatedSection'
import { MapPin, GraduationCap, Award } from 'lucide-react'

const bio = `I'm a Computer Science Engineering undergraduate with a deep focus on AI and Machine Learning. My work spans the full spectrum — from building intelligent computer vision pipelines and GenAI-powered agents to crafting responsive, production-ready front-end interfaces and scalable backend architectures. I'm grounded in core CS fundamentals and driven by a growing passion for enterprise-scale GenAI engineering.`

const facts = [
  {
    icon: <GraduationCap size={18} className="text-gold" />,
    label: 'Education',
    value: 'B.Tech, CSE — Pillai College of Engineering, University of Mumbai (2023–2027)',
  },
  {
    icon: <Award size={18} className="text-gold" />,
    label: 'CGPA',
    value: '7.99 / 10',
  },
  {
    icon: <MapPin size={18} className="text-gold" />,
    label: 'Location',
    value: 'Navi Mumbai, Maharashtra',
  },
]

const skillGroups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS'] },
  { title: 'AI / ML & Computer Vision', items: ['OpenCV', 'Generative AI (LLMs, RAG)', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy'] },
  { title: 'Frameworks & Libraries', items: ['FastAPI', 'React.js', 'Next.js', 'Node.js'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'REST APIs'] },
  { title: 'Core Concepts', items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'] },
]

const About = () => {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <MotionChild>
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            01 — About
          </p>
        </MotionChild>

        <MotionChild>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ivory mb-8 tracking-tight">
            Who I Am
          </h2>
        </MotionChild>

        {/* Bio */}
        <MotionChild>
          <p className="text-ivory-dim text-base sm:text-lg max-w-3xl leading-relaxed mb-12">
            {bio}
          </p>
        </MotionChild>

        {/* Key Facts */}
        <MotionChild>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border border-gold/15 rounded-xl p-5 bg-canvas-light/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  {fact.icon}
                  <span className="text-gold text-xs font-medium tracking-[0.15em] uppercase">
                    {fact.label}
                  </span>
                </div>
                <p className="text-ivory text-sm leading-relaxed">{fact.value}</p>
              </div>
            ))}
          </div>
        </MotionChild>

        {/* Skills */}
        <MotionChild>
          <h3 className="font-syne font-bold text-xl text-ivory mb-6">Skills & Technologies</h3>
        </MotionChild>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <MotionChild key={group.title}>
              <div className="mb-2">
                <h4 className="text-gold text-xs font-medium tracking-[0.15em] uppercase mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-ivory/80 text-xs border border-gold/20 bg-gold/[0.04] px-3 py-1.5 rounded-full hover:border-gold/40 hover:bg-gold/[0.08] transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </MotionChild>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About

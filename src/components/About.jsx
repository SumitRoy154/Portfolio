import AnimatedSection, { MotionChild } from './AnimatedSection'
import { MapPin, GraduationCap, Award, Bot, Binary, Database, Webhook, Layers3, ServerCog } from 'lucide-react'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiDjango,
  SiFlask,
} from 'react-icons/si'

const CIcon = () => (
  <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-current text-[0.55rem] font-bold leading-none">
    C
  </span>
)

const bio = `I'm Sumit, a Full Stack & AI Engineer building production-ready systems across computer vision, GenAI agents, and scalable web applications. My work includes AI agent systems built with LangChain for LLM orchestration, and computer vision pipelines using OpenCV. On the full-stack side, I build platforms with role-based access control and asynchronous processing. I work across the stack — React/Next.js on the frontend, Python and Node on the backend — with a growing focus on applying GenAI to real enterprise workflows.`

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
  {
    title: 'Languages',
    items: [
      { label: 'Python', icon: <SiPython /> },
      { label: 'JavaScript', icon: <SiJavascript /> },
      { label: 'TypeScript', icon: <SiTypescript /> },
      { label: 'C++', icon: <SiCplusplus /> },
      { label: 'C', icon: <CIcon /> },
      { label: 'HTML/CSS', icon: <SiHtml5 /> },
    ],
  },
  {
    title: 'AI / ML & Computer Vision',
    items: [
      { label: 'OpenCV', icon: <SiOpencv /> },
      { label: 'Generative AI (LLMs, RAG)', icon: <Bot /> },
      { label: 'PyTorch', icon: <SiPytorch /> },
      { label: 'TensorFlow', icon: <SiTensorflow /> },
      { label: 'Scikit-Learn', icon: <SiScikitlearn /> },
      { label: 'Pandas', icon: <SiPandas /> },
      { label: 'NumPy', icon: <SiNumpy /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { label: 'FastAPI', icon: <SiFastapi /> },
      { label: 'Flask', icon: <SiFlask /> },
      { label: 'Django', icon: <SiDjango /> },
      { label: 'React.js', icon: <SiReact /> },
      { label: 'Next.js', icon: <SiNextdotjs /> },
      { label: 'Node.js', icon: <SiNodedotjs /> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { label: 'PostgreSQL', icon: <SiPostgresql /> },
      { label: 'MySQL', icon: <SiMysql /> },
      { label: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git', icon: <SiGit /> },
      { label: 'GitHub', icon: <SiGithub /> },
      { label: 'Docker', icon: <SiDocker /> },
      { label: 'REST APIs', icon: <Webhook /> },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { label: 'Data Structures & Algorithms', icon: <Binary /> },
      { label: 'OOP', icon: <Layers3 /> },
      { label: 'DBMS', icon: <Database /> },
      { label: 'Operating Systems', icon: <ServerCog /> },
    ],
  },
]

const About = () => {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
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
              <p className="text-ivory-dim text-base sm:text-lg max-w-3xl leading-relaxed mb-12 lg:ml-auto">
                {bio}
              </p>
            </MotionChild>
          </div>

          <MotionChild>
            <div className="grid grid-cols-1 gap-4 lg:max-w-md lg:mt-15">
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
        </div>

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
                      key={item.label}
                      className="inline-flex items-center gap-1.5 text-ivory/80 text-xs border border-gold/20 bg-gold/[0.04] px-3 py-1.5 rounded-full hover:border-gold/40 hover:bg-gold/[0.08] hover:scale-[1.04] transition-all duration-200"
                    >
                      <span className="text-base leading-none text-gold [&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>
                      {item.label}
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

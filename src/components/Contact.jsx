import { useState } from 'react'
import AnimatedSection, { MotionChild } from './AnimatedSection'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import footerImage from '../../Footer Image .png'

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'sumit.roy.152004@gmail.com',
    href: 'mailto:sumit.roy.152004@gmail.com',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 81458 65949',
    href: 'tel:+918145865949',
  },
  {
    icon: <GitHubIcon size={18} />,
    label: 'GitHub',
    value: 'SumitRoy154',
    href: 'https://github.com/SumitRoy154',
  },
  {
    icon: <LinkedInIcon size={18} />,
    label: 'LinkedIn',
    value: 'sumit-roy-a73098309',
    href: 'https://www.linkedin.com/in/sumit-roy-a73098309/',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Navi Mumbai, Maharashtra',
    href: null,
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static form — no backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="relative py-24 sm:py-32 px-6 -mb-32">
      <AnimatedSection id="contact" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <MotionChild>
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
              05 — Contact
            </p>
          </MotionChild>

          <MotionChild>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ivory mb-4 tracking-tight">
              Get in Touch
            </h2>
          </MotionChild>

          <MotionChild>
            <p className="text-ivory-dim text-base sm:text-lg max-w-xl mb-12 leading-relaxed">
              Open to AI/ML and full-stack opportunities — feel free to reach out.
            </p>
          </MotionChild>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact links */}
            <MotionChild>
              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Wrapper = link.href ? 'a' : 'div'
                  const wrapperProps = link.href
                    ? {
                        href: link.href,
                        target: link.href.startsWith('http') ? '_blank' : undefined,
                        rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                      }
                    : {}

                  return (
                    <Wrapper
                      key={link.label}
                      {...wrapperProps}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-gold/10 bg-canvas-light/30 transition-all duration-200 ${
                        link.href
                          ? 'hover:border-gold/25 hover:bg-gold/[0.04] cursor-pointer'
                          : ''
                      }`}
                    >
                      <div className="text-gold shrink-0">{link.icon}</div>
                      <div>
                        <p className="text-ivory-dim text-xs uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-ivory text-sm">{link.value}</p>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>
            </MotionChild>

            {/* Contact form */}
            <MotionChild>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="text-ivory-dim text-xs uppercase tracking-wider block mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-canvas-light border border-gold/15 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-ivory-dim text-xs uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-canvas-light border border-gold/15 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-ivory-dim text-xs uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-canvas-light border border-gold/15 rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                    placeholder="Your message…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-ivory text-canvas font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.02] hover:brightness-110 transition-all duration-200 cursor-pointer"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  <Send size={14} />
                </button>
              </form>
            </MotionChild>
          </div>
        </div>
      </AnimatedSection>

      {/* Background image with fade overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none left-0 flex items-end justify-end">
        <img
          src={footerImage}
          alt="Footer background"
          className="max-w-[calc(100%-0px)] max-h-full object-contain"
        />
        <div className="absolute inset-0 bg-canvas/80" />
      </div>
    </div>
  )
}

export default Contact

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import AnimatedSection, { MotionChild } from './AnimatedSection'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons'
import { FaDribbble } from 'react-icons/fa'
import { motion } from 'framer-motion'
const footerImage = '/footer-image.png'

// Zod schema for client-side validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim(),
  honeypot: z.string().optional(),
})

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again later.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
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
              <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-4">
                {/* Hidden honeypot field */}
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="contact-name" className="text-ivory-dim text-xs uppercase tracking-wider block mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register('name')}
                    className={`w-full bg-canvas-light border rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/50 focus:border-red-500/70' : 'border-gold/15 focus:border-gold/40'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-ivory-dim text-xs uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register('email')}
                    className={`w-full bg-canvas-light border rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/50 focus:border-red-500/70' : 'border-gold/15 focus:border-gold/40'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-ivory-dim text-xs uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    {...register('message')}
                    className={`w-full bg-canvas-light border rounded-xl px-4 py-3 text-ivory text-sm placeholder:text-ivory/20 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500/50 focus:border-red-500/70' : 'border-gold/15 focus:border-gold/40'
                    }`}
                    placeholder="Your message…"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm">
                    Thank you! Your message has been sent.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-ivory text-canvas font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.02] hover:brightness-110 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="relative flex items-center justify-center text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                    title="Basketball"
                  >
                    <FaDribbble size={22} />
                  </motion.div>
                </div>
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

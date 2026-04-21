'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, MapPin } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    inquiry: 'model',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('https://testing.varakit.com/api/email/contact-forms', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminEmail: 'brow5187+reco@gmail.com',
          formData: form,
          userId: 'd62dd6df-68aa-4182-8ce7-5e5ecfbae553',
        }),
      })
      if (res.ok) {
        setFormState('success')
        setForm({ fullName: '', email: '', subject: '', inquiry: 'model', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#000000] py-28 lg:py-36 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-800 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#888888] text-[10px] font-medium tracking-[0.45em] uppercase mb-4">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-[#d0d0d0] text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-balance"
          >
            Start Your Journey
            <br />
            <span className="italic font-light text-[#d0d0d0]/70">With Reco</span>
          </h2>
          <div className="mt-8 w-full h-px bg-[#2a2a2a]" />
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 transition-all duration-1000 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <p className="text-[#d0d0d0] text-sm font-semibold tracking-wide mb-4">
                Who We Work With
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Aspiring models looking to enter the industry',
                  'Established models seeking better representation',
                  'Fashion brands searching for diverse talent',
                  'Commercial clients and creative agencies',
                  'International clients seeking US talent',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#d0d0d0]/40 flex-shrink-0" />
                    <span className="text-[#888888] text-sm leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-[#d0d0d0]/60" />
                </div>
                <div>
                  <p className="text-[#888888] text-[10px] tracking-[0.2em] uppercase mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:brow5187+reco@gmail.com"
                    className="text-[#d0d0d0] text-sm hover:text-white transition-colors duration-300"
                  >
                    brow5187+reco@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-[#d0d0d0]/60" />
                </div>
                <div>
                  <p className="text-[#888888] text-[10px] tracking-[0.2em] uppercase mb-0.5">
                    Location
                  </p>
                  <p className="text-[#d0d0d0] text-sm">United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {formState === 'success' ? (
              <div className="border border-[#2a2a2a] p-12 flex flex-col items-center justify-center text-center min-h-[420px]">
                <CheckCircle size={40} className="text-[#d0d0d0]/60 mb-6" />
                <h3 className="text-[#d0d0d0] text-xl font-semibold mb-3">Message Received</h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-8 max-w-sm font-light">
                  Thank you for reaching out. Our team will review your inquiry and be in touch
                  within 2 business days.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="px-8 py-3 border border-[#2a2a2a] text-[#d0d0d0] text-xs font-medium tracking-[0.2em] uppercase hover:border-[#d0d0d0]/40 transition-colors duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="text-[#888888] text-[10px] tracking-[0.2em] uppercase"
                    >
                      Full Name <span className="text-[#d0d0d0]/40">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#d0d0d0] placeholder-[#444] text-sm px-4 py-3.5 outline-none focus:border-[#d0d0d0]/30 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[#888888] text-[10px] tracking-[0.2em] uppercase"
                    >
                      Email <span className="text-[#d0d0d0]/40">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#d0d0d0] placeholder-[#444] text-sm px-4 py-3.5 outline-none focus:border-[#d0d0d0]/30 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry"
                      className="text-[#888888] text-[10px] tracking-[0.2em] uppercase"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handleChange}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#d0d0d0] text-sm px-4 py-3.5 outline-none focus:border-[#d0d0d0]/30 transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="model">Model Application</option>
                      <option value="brand">Brand / Client Booking</option>
                      <option value="agency">Agency Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-[#888888] text-[10px] tracking-[0.2em] uppercase"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#d0d0d0] placeholder-[#444] text-sm px-4 py-3.5 outline-none focus:border-[#d0d0d0]/30 transition-colors duration-300"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[#888888] text-[10px] tracking-[0.2em] uppercase"
                  >
                    Message <span className="text-[#d0d0d0]/40">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#d0d0d0] placeholder-[#444] text-sm px-4 py-3.5 outline-none focus:border-[#d0d0d0]/30 transition-colors duration-300 resize-none"
                    placeholder="Tell us about yourself or your project..."
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-3 border border-red-900/40 bg-red-950/20 px-4 py-3">
                    <AlertCircle size={15} className="text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#d0d0d0] text-[#121212] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <>
                      <div className="w-3.5 h-3.5 border border-[#121212]/40 border-t-[#121212] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Now
                      <Send
                        size={13}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

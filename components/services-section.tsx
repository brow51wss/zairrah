'use client'

import { useEffect, useRef, useState } from 'react'
import { Briefcase, Camera, Users, Sparkles, BookOpen, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Model Management',
    description:
      'Comprehensive representation with dedicated agents who understand your individual strengths and career goals.',
    number: '01',
  },
  {
    icon: Users,
    title: 'Talent Representation',
    description:
      'Strategic placement with top brands, agencies, and creative directors across fashion, editorial, and commercial sectors.',
    number: '02',
  },
  {
    icon: Camera,
    title: 'Portfolio Development',
    description:
      'Curated portfolio building with industry-leading photographers to showcase your versatility and range.',
    number: '03',
  },
  {
    icon: Sparkles,
    title: 'Fashion & Editorial Castings',
    description:
      'Access to high-profile castings for runway, print, lookbooks, and editorial features with leading publications.',
    number: '04',
  },
  {
    icon: TrendingUp,
    title: 'Commercial Bookings',
    description:
      'Premium commercial and print bookings with global brands seeking authentic, professionally managed talent.',
    number: '05',
  },
  {
    icon: BookOpen,
    title: 'Career Guidance',
    description:
      'Personalized coaching, brand development, and strategic career planning tailored to your long-term vision.',
    number: '06',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#000000] py-28 lg:py-36 px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-800 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[#888888] text-[10px] font-medium tracking-[0.45em] uppercase mb-4">
                What We Offer
              </p>
              <h2
                id="services-heading"
                className="text-[#d0d0d0] text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-balance"
              >
                Services Built
                <br />
                <span className="italic font-light text-[#d0d0d0]/70">Around You</span>
              </h2>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">
              Every service we provide is designed with one goal — to accelerate your career and
              maximize every opportunity in a competitive industry.
            </p>
          </div>
          <div className="mt-8 w-full h-px bg-[#2a2a2a]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a]">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.number}
                className={`group bg-[#000000] p-10 hover:bg-[#111111] transition-all duration-400 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#2a2a2a] group-hover:border-[#d0d0d0]/20 transition-colors duration-400">
                    <Icon size={18} className="text-[#d0d0d0]/60 group-hover:text-[#d0d0d0] transition-colors duration-400" />
                  </div>
                  <span className="text-[#2a2a2a] text-4xl font-bold tracking-[-0.04em] group-hover:text-[#333333] transition-colors duration-400">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-[#d0d0d0] text-base font-semibold tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

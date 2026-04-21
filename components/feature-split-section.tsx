'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react'

const femaleStats = [
  { icon: Star, label: 'Editorial', value: 'Print & Media' },
  { icon: TrendingUp, label: 'Career Growth', value: 'Curated Path' },
  { icon: Award, label: 'Global Reach', value: 'International' },
]

const maleStats = [
  { icon: Users, label: 'Representation', value: '1-on-1 Focus' },
  { icon: Star, label: 'Commercial', value: 'Ad Campaigns' },
  { icon: Award, label: 'Castings', value: 'Priority Access' },
]

export default function FeatureSplitSection() {
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
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="roster"
      aria-labelledby="roster-heading"
      className="bg-[#0a0a0a] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[800px] lg:min-h-[920px]">

        {/* Column 1 — Female model image */}
        <div
          className={`relative overflow-hidden lg:col-span-1 h-[560px] lg:h-auto transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/HDIhnYv9ozC1StgjSHkzq-Iq7uoQo69ryxKy17HFmIBKHe9TSJNX.jpg"
            alt="Reco Modeling — Female talent, Champion editorial campaign"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[#d0d0d0] text-[9px] font-medium tracking-[0.4em] uppercase border border-[#d0d0d0]/30 px-3 py-1.5 backdrop-blur-sm bg-[#0a0a0a]/40">
              Female Division
            </span>
          </div>
        </div>

        {/* Column 2 — Female content */}
        <div
          className={`bg-[#111111] border-r border-[#1e1e1e] flex flex-col justify-center px-8 lg:px-10 py-16 transition-all duration-1000 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#555555] text-[9px] font-medium tracking-[0.5em] uppercase mb-6">
            Women's Board
          </p>
          <h2
            id="roster-heading"
            className="text-[#d0d0d0] text-3xl sm:text-4xl font-bold leading-[1.08] tracking-[-0.025em] mb-5 text-balance"
          >
            Curated for
            <br />
            <span className="italic font-light text-[#d0d0d0]/55">Fashion & Film</span>
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed font-light mb-10">
            Our women&apos;s roster represents talent built for the demands of modern fashion — from
            high-end editorial to global commercial campaigns. Every model receives a tailored
            development plan aligned with her unique strengths and market fit.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {femaleStats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-8 h-8 flex items-center justify-center border border-[#2a2a2a] group-hover:border-[#d0d0d0]/30 transition-colors duration-300 shrink-0">
                  <Icon size={13} className="text-[#555555] group-hover:text-[#d0d0d0]/60 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[#d0d0d0] text-xs font-medium tracking-wide">{value}</p>
                  <p className="text-[#444444] text-[10px] tracking-[0.15em] uppercase mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 text-[#d0d0d0] text-[10px] font-semibold tracking-[0.25em] uppercase hover:text-white transition-colors duration-300 w-fit"
          >
            Apply Now
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Column 3 — Male model image */}
        <div
          className={`relative overflow-hidden lg:col-span-1 h-[560px] lg:h-auto transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Y0tRzbVLdnMEWcjQHBXpV-cKi1qlDKkOKPrvxIC3CfOTXv08PO9v.jpg"
            alt="Reco Modeling — Male talent, editorial fashion campaign"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-[#d0d0d0] text-[9px] font-medium tracking-[0.4em] uppercase border border-[#d0d0d0]/30 px-3 py-1.5 backdrop-blur-sm bg-[#0a0a0a]/40">
              Male Division
            </span>
          </div>
        </div>

        {/* Column 4 — Male content */}
        <div
          className={`bg-[#111111] flex flex-col justify-center px-8 lg:px-10 py-16 transition-all duration-1000 delay-450 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#555555] text-[9px] font-medium tracking-[0.5em] uppercase mb-6">
            Men&apos;s Board
          </p>
          <h3 className="text-[#d0d0d0] text-3xl sm:text-4xl font-bold leading-[1.08] tracking-[-0.025em] mb-5 text-balance">
            Built for
            <br />
            <span className="italic font-light text-[#d0d0d0]/55">Commercial & Print</span>
          </h3>
          <p className="text-[#666666] text-sm leading-relaxed font-light mb-10">
            Reco Modeling&apos;s men&apos;s board is designed for talent ready to compete at
            the highest level. We connect models with top brands and agencies, providing direct
            access to premium castings, editorial shoots, and advertising contracts.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {maleStats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-8 h-8 flex items-center justify-center border border-[#2a2a2a] group-hover:border-[#d0d0d0]/30 transition-colors duration-300 shrink-0">
                  <Icon size={13} className="text-[#555555] group-hover:text-[#d0d0d0]/60 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[#d0d0d0] text-xs font-medium tracking-wide">{value}</p>
                  <p className="text-[#444444] text-[10px] tracking-[0.15em] uppercase mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 text-[#d0d0d0] text-[10px] font-semibold tracking-[0.25em] uppercase hover:text-white transition-colors duration-300 w-fit"
          >
            Book Talent
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  )
}

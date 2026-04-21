'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '500+', label: 'Models Represented' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '100%', label: 'Personalized Management' },
  { value: '3', label: 'Continents Reached' },
]

export default function AboutSection() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#121212] py-28 lg:py-36 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-[#888888] text-[10px] font-medium tracking-[0.45em] uppercase mb-4">
              Our Story
            </p>
            <h2
              id="about-heading"
              className="text-[#d0d0d0] text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-balance mb-8"
            >
              Where Talent Meets
              <br />
              <span className="italic font-light text-[#d0d0d0]/70">True Opportunity</span>
            </h2>
            <div className="w-12 h-px bg-[#d0d0d0]/30 mb-8" />
            <p className="text-[#888888] text-base leading-relaxed mb-6 font-light">
              Reco Modeling was founded on a singular belief: that every model deserves more than a
              number in a roster. We operate with a one-to-one management philosophy — meaning every
              decision, every booking, and every career milestone is shaped around you as an
              individual.
            </p>
            <p className="text-[#888888] text-base leading-relaxed font-light">
              Our mission is to develop and manage talent with personal attention, empowering models
              to achieve their fullest potential in fashion, advertising, and global media. From
              emerging talent to established professionals, we provide the structure, strategy, and
              support to build meaningful, lasting careers.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-7.jpg"
                alt="Reco Modeling talent"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] border border-[#2a2a2a] px-8 py-6">
                <p className="text-[#d0d0d0] text-3xl font-bold mb-1">1:1</p>
                <p className="text-[#888888] text-xs tracking-[0.15em] uppercase">
                  Dedicated Management
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#2a2a2a] border border-[#2a2a2a] transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#121212] px-8 py-10 flex flex-col items-start"
            >
              <span className="text-[#d0d0d0] text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-2">
                {stat.value}
              </span>
              <span className="text-[#888888] text-xs tracking-[0.15em] uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

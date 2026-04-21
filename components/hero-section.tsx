'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const slides = [
  {
    image:
      'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4-1.jpg',
    label: 'Fashion',
    desktopPosition: 'lg:object-left',
  },
  {
    image:
      'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4.jpg',
    label: 'Editorial',
    desktopPosition: 'lg:object-center',
  },
  {
    image:
      'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-6.jpg',
    label: 'Commercial',
    desktopPosition: 'lg:object-right',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const scrollDown = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative h-screen min-h-[400px] lg:max-h-[700px] lg:min-h-[500px] overflow-hidden bg-[#121212]"
      aria-label="Hero"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={`Reco Modeling — ${slide.label}`}
            className={`w-full h-full object-cover object-top lg:object-contain ${slide.desktopPosition}`}
          />
          <div className="absolute inset-0 bg-[#121212]/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#d0d0d0]/60 text-[10px] font-medium tracking-[0.45em] uppercase mb-6">
            Professional Model Management
          </p>
          <h1 className="text-[#d0d0d0] font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-balance mb-8">
            Elevate
            <br />
            <span className="italic font-light text-[#d0d0d0]/80">Your Career.</span>
          </h1>
          <p className="text-[#888888] text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-12 font-light">
            One-to-one talent management built around your potential — from first casting to
            international campaigns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-10 py-4 bg-[#d0d0d0] text-[#121212] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              Book Now
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#about')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-10 py-4 border border-[#d0d0d0]/30 text-[#d0d0d0] text-xs font-medium tracking-[0.2em] uppercase hover:border-[#d0d0d0] transition-colors duration-300"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 lg:px-12">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? 'w-8 h-0.5 bg-[#d0d0d0]'
                  : 'w-2 h-0.5 bg-[#d0d0d0]/30 hover:bg-[#d0d0d0]/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollDown}
          className="flex flex-col items-center gap-2 text-[#888888] hover:text-[#d0d0d0] transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
          <ArrowDown
            size={14}
            className="group-hover:translate-y-1 transition-transform duration-300"
          />
        </button>
      </div>

      <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 -rotate-90 origin-center">
        <span className="text-[#888888]/50 text-[9px] tracking-[0.4em] uppercase">
          {slides[current].label}
        </span>
      </div>
    </section>
  )
}

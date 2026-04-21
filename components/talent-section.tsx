'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const gallery = [
  {
    src: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4-1.jpg',
    alt: 'Reco Modeling — Fashion editorial',
    category: 'Fashion',
    span: 'row-span-2',
  },
  {
    src: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-6.jpg',
    alt: 'Reco Modeling — Editorial campaign',
    category: 'Editorial',
    span: '',
  },
  {
    src: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4.jpg',
    alt: 'Reco Modeling — Commercial print',
    category: 'Commercial',
    span: '',
  },
  {
    src: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-7.jpg',
    alt: 'Reco Modeling — Talent showcase',
    category: 'Runway',
    span: '',
  },
]

export default function TalentSection() {
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
      id="talent"
      ref={sectionRef}
      className="bg-[#121212] py-28 lg:py-36 px-6"
      aria-labelledby="talent-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-800 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-[#888888] text-[10px] font-medium tracking-[0.45em] uppercase mb-4">
              Our Talent
            </p>
            <h2
              id="talent-heading"
              className="text-[#d0d0d0] text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-balance"
            >
              Faces That
              <br />
              <span className="italic font-light text-[#d0d0d0]/70">Define Brands</span>
            </h2>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 text-[#d0d0d0] text-xs font-medium tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
          >
            Work With Us
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 auto-rows-[260px] lg:auto-rows-[320px] gap-2 transition-all duration-1000 delay-100 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${item.span} ${
                i === 0 ? 'col-span-1 lg:col-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#121212]/0 group-hover:bg-[#121212]/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[#d0d0d0] text-[9px] font-medium tracking-[0.3em] uppercase bg-[#121212]/80 px-3 py-1.5">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 bg-[#1a1a1a] border border-[#2a2a2a] p-10 lg:p-16 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-[#888888] text-[10px] font-medium tracking-[0.45em] uppercase mb-4">
                Join Our Roster
              </p>
              <h3 className="text-[#d0d0d0] text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] mb-4">
                Ready to Take Your
                <br />
                <span className="italic font-light text-[#d0d0d0]/70">Career Further?</span>
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed font-light max-w-lg">
                Whether you are just starting out or looking to take your career to an international
                level, Reco Modeling provides the dedicated attention and industry connections to
                make it happen.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector('#contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full px-8 py-4 bg-[#d0d0d0] text-[#121212] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
              >
                Apply as a Model
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full px-8 py-4 border border-[#2a2a2a] text-[#d0d0d0] text-xs font-medium tracking-[0.2em] uppercase hover:border-[#d0d0d0]/40 transition-colors duration-300"
              >
                Book Talent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

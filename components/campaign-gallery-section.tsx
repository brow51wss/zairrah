'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

const campaigns = [
  {
    src: '/gallery/rrj-flaunt.png',
    alt: 'RRJ & Flaunt campaign',
    brand: 'RRJ · Flaunt',
    category: 'Fashion',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/haagen-dazs.png',
    alt: 'Häagen-Dazs campaign',
    brand: 'Häagen-Dazs',
    category: 'Commercial',
    span: 'lg:col-span-1',
  },
  {
    src: '/gallery/colt45-pm-kawasaki.png',
    alt: 'Colt 45 · Philip Morris · Kawasaki campaigns',
    brand: 'Colt 45 · Philip Morris · Kawasaki',
    category: 'Commercial',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/chocolava.png',
    alt: 'Choco Lava campaign',
    brand: 'Choco Lava',
    category: 'Commercial',
    span: 'lg:col-span-1',
  },
  {
    src: '/gallery/sprite.png',
    alt: 'Sprite campaign',
    brand: 'Sprite',
    category: 'Sports',
    span: 'lg:col-span-3',
  },
  {
    src: '/gallery/101ny-freego-jag.png',
    alt: '101 New York · Freego · JAG campaigns',
    brand: '101 New York · Freego · JAG',
    category: 'Fashion',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/robinsons.png',
    alt: 'Robinsons Department Store campaign',
    brand: 'Robinsons Department Store',
    category: 'Commercial',
    span: 'lg:col-span-1',
  },
  {
    src: '/gallery/greed-creamsilk-mirror.png',
    alt: 'Sofitel · Cream Silk · Mirror campaigns',
    brand: 'Sofitel · Cream Silk · Mirror',
    category: 'Beauty',
    span: 'lg:col-span-2',
  },
  {
    src: '/gallery/century-tuna.png',
    alt: 'Century Tuna campaign',
    brand: 'Century Tuna',
    category: 'Commercial',
    span: 'lg:col-span-1',
  },
]

export default function CampaignGallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev !== null ? (prev + 1) % campaigns.length : null))
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev !== null ? (prev - 1 + campaigns.length) % campaigns.length : null))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <>
      <section
        id="campaigns"
        ref={sectionRef}
        className="bg-[#0e0e0e] py-28 lg:py-36 px-6"
        aria-labelledby="campaigns-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[#888888] text-[10px] font-medium tracking-[0.45em] uppercase mb-4">
              Portfolio
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                id="campaigns-heading"
                className="text-[#d0d0d0] text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.02em]"
              >
                Campaign
                <br />
                <span className="italic font-light text-[#d0d0d0]/70">Work</span>
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">
                A selection of national and international campaigns featuring Reco talent across
                fashion, commercial, beauty, and sports.
              </p>
            </div>
            <div className="w-12 h-px bg-[#d0d0d0]/20 mt-8" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {campaigns.map((item, i) => (
              <div
                key={i}
                className={`${item.span} group relative overflow-hidden cursor-pointer bg-[#0e0e0e] transition-all duration-700 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.brand}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{ minHeight: '220px', maxHeight: '400px' }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#121212]/0 group-hover:bg-[#121212]/70 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <p className="text-[#888888] text-[9px] font-medium tracking-[0.4em] uppercase mb-1">
                    {item.category}
                  </p>
                  <p className="text-[#d0d0d0] text-sm font-semibold tracking-wide leading-snug">
                    {item.brand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={campaigns[lightbox].brand}
        >
          <button
            className="absolute top-6 right-6 text-[#888888] hover:text-[#d0d0d0] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#d0d0d0] text-2xl px-3 py-6 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((prev) => (prev !== null ? (prev - 1 + campaigns.length) % campaigns.length : null))
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={campaigns[lightbox].src}
              alt={campaigns[lightbox].alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-[#888888] text-[9px] font-medium tracking-[0.4em] uppercase mb-1">
                  {campaigns[lightbox].category}
                </p>
                <p className="text-[#d0d0d0] text-sm font-semibold tracking-wide">
                  {campaigns[lightbox].brand}
                </p>
              </div>
              <p className="text-[#444444] text-xs tracking-widest">
                {lightbox + 1} / {campaigns.length}
              </p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#d0d0d0] text-2xl px-3 py-6 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((prev) => (prev !== null ? (prev + 1) % campaigns.length : null))
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

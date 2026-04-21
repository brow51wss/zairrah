'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Talent', href: '#talent' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center" aria-label="Reco Modeling Home">
            <Image
              src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/logos/Reco%20Modeling/1776765160255-logo_white.png"
              alt="Reco Modeling"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer group pb-0.5"
                  style={{ color: isActive ? '#d0d0d0' : '#888888' }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px bg-[#d0d0d0] transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                  {/* hover underline for non-active */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 h-px bg-[#d0d0d0]/40 w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </button>
              )
            })}
            <button
              onClick={() => handleNav('#contact')}
              className="ml-4 px-6 py-2.5 bg-[#d0d0d0] text-[#121212] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300"
            >
              Book Now
            </button>
          </nav>

          <button
            className="md:hidden text-[#d0d0d0] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#121212]/98 backdrop-blur-md border-t border-[#2a2a2a]">
          <nav className="flex flex-col px-6 py-6 gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 text-left cursor-pointer"
                  style={{ color: isActive ? '#d0d0d0' : '#888888' }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {isActive && <span className="w-4 h-px bg-[#d0d0d0] shrink-0" />}
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-2 px-6 py-3 bg-[#d0d0d0] text-[#121212] text-xs font-semibold tracking-[0.15em] uppercase w-full hover:bg-white transition-colors duration-300"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

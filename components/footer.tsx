import Image from 'next/image'

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Talent', href: '#talent' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] border-t border-[#2a2a2a]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div>
            <Image
              src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/logos/Reco%20Modeling/1776765160255-logo_white.png"
              alt="Reco Modeling"
              width={130}
              height={36}
              className="h-8 w-auto object-contain mb-5"
            />
            <p className="text-[#888888] text-sm leading-relaxed font-light max-w-xs">
              Personalized model management and talent representation in the US and beyond.
            </p>
          </div>

          <div>
            <p className="text-[#d0d0d0] text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#888888] text-sm hover:text-[#d0d0d0] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-[#d0d0d0] text-[10px] font-medium tracking-[0.3em] uppercase mb-6">
              Get Started
            </p>
            <p className="text-[#888888] text-sm leading-relaxed font-light mb-6">
              Ready to take the next step? Reach out and let&apos;s build your career together.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 bg-[#d0d0d0] text-[#121212] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#888888] text-xs font-light">
            &copy; {year} Reco Modeling. All rights reserved.
          </p>
          <p className="text-[#888888] text-xs font-light">
            Designed & Built by{' '}
            <a
              href="https://varakit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d0d0d0]/60 hover:text-[#d0d0d0] transition-colors duration-300"
            >
              varakit.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

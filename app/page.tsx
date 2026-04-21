import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import FeatureSplitSection from '@/components/feature-split-section'
import TalentSection from '@/components/talent-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeatureSplitSection />
      <TalentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

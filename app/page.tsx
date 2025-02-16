import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import DashboardPreview from "@/components/dashboard-preview"
import Pricing from "@/components/pricing"
import Testimonial from "@/components/testimonial"
import Team from "@/components/team"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Pricing />
        <Testimonial />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}


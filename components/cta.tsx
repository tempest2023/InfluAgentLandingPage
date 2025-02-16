import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Social Media?</h2>
        <p className="text-xl mb-8">
          Join InfluAgent today and experience the power of AI-driven social media management.
        </p>
        <Button size="lg" variant="secondary">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}


'use client'
import { Button } from "@/components/ui/button"
import { useWaitlist } from '@/contexts/waitlist-context'

export default function CTA() {
  const { openWaitlist } = useWaitlist()
  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-purple-100 dark:bg-gradient-to-b dark:from-[hsl(0,0%,3.9%)] dark:to-[hsl(262,83%,20%)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Revolutionize Your Social Media?</h2>
        <p className="text-xl mb-8">
          Join InfluAgent today and experience the power of AI-driven social media management.
        </p>
        <Button 
          size="xl" 
          onClick={openWaitlist}
          className="text-lg md:text-xl py-7 px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-400 dark:hover:to-purple-400 dark:text-white transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl active:scale-95"
        >
          Start Free Trial
        </Button>
      </div>
    </section>
  )
}


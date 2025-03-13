'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useWaitlist } from "@/contexts/waitlist-context"

export default function Hero() {
  const { openWaitlist } = useWaitlist()
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Revolutionize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Social Media</span> with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Achieve success in social growth with the help of a fully managed AI Agent. Hire your 24/7 AI marketing
                expert to increase your influence across platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-0">
                <Button 
                  size="lg" 
                  onClick={openWaitlist}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl active:scale-95"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 hover:shadow-md active:scale-95"
                  onClick={() => {
                    const demoSection = document.querySelector('#ai-driven-automation');
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative pt-8 md:pt-0">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-6 shadow-lg opacity-75 blur-lg"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/Dashboard.png"
                  alt="InfluAgent Dashboard"
                  width={600}
                  height={400}
                  className="rounded-md"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-12 -right-6 md:right-0 w-36 sm:w-48 h-72 sm:h-96 z-20">
              <div className="relative w-full h-full">
                <Image
                  src="/InfluAgentMobileDesign/MobileDesign/Home.png"
                  alt="InfluAgent Mobile App"
                  fill
                  className="object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


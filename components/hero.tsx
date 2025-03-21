'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useWaitlist } from "@/contexts/waitlist-context"

export default function Hero() {
  const { openWaitlist } = useWaitlist()
  return (
    <section className="pt-32 pb-40 md:pt-48 md:pb-52 bg-gradient-to-b from-white to-blue-100 dark:bg-gradient-to-b dark:from-[hsl(0,0%,3.9%)] dark:to-[hsl(221,83%,20%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-[4rem] font-bold text-gray-900 dark:text-white mb-10 leading-tight">
                Revolutionize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Social Media</span> with AI
              </h1>
              <p className="text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Achieve success in social growth with the help of a fully managed AI Agent. Hire your 24/7 AI marketing
                expert to increase your influence across platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-14 sm:mb-0">
                <Button 
                  size="xl" 
                  onClick={openWaitlist}
                  className="text-lg md:text-xl py-7 px-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-400 dark:hover:to-purple-400 dark:text-white transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl active:scale-95"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  className="text-lg md:text-xl py-7 px-10 border-2 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:border-gray-500 dark:hover:text-white transform hover:scale-105 transition-all duration-200 hover:shadow-md active:scale-95"
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
          <div className="md:w-1/2 relative pt-12 md:pt-0">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-6 shadow-lg opacity-75 blur-lg"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/Dashboard.png"
                  alt="InfluAgent Dashboard"
                  width={800}
                  height={600}
                  className="rounded-md"
                  priority
                />
              </div>
            </div>
            <div className="absolute -top-[4em] md:-top-[6em] md:-bottom-12 md:-right-6 md:right-0 w-48 sm:w-64 h-96 sm:h-[32rem] z-20">
            <div className="w-full h-full relative rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/InfluAgentMobileDesign/MobileDesign/Home.png"
                  alt="InfluAgent Mobile App"
                  width={430}
                  height={940}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


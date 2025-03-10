import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionize Your Social Media with AI
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Achieve success in social growth with the help of a fully managed AI Agent. Hire your 24/7 AI marketing
              expert to increase your influence.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-6 shadow-lg"></div>
              <Image
                src="/Dashboard.png"
                alt="InfluAgent Dashboard"
                width={600}
                height={400}
                className="relative rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


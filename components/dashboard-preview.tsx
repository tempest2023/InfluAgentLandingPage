"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  {
    src: "/Dashboard.png",
    alt: "InfluAgent Dashboard"
  },
  {
    src: "/AgentManagement.png",
    alt: "InfluAgent Management"
  },
  {
    src: "/AIGenerationContent.png",
    alt: "AI Content Generation"
  },
  {
    src: "/PostsAnalysis.png",
    alt: "Posts Analysis"
  },
  {
    src: "/PostsHighlight.png",
    alt: "Posts Highlight"
  },
  {
    src: "/TrendsAnalysis.png",
    alt: "Trends Analysis"
  }
]

const mobileImages = [
  {
    src: "/InfluAgentMobileDesign/MobileDesign/Login.png",
    alt: "Login Screen"
  },
  {
    src: "/InfluAgentMobileDesign/MobileDesign/Home.png",
    alt: "Home Screen"
  },
  {
    src: "/InfluAgentMobileDesign/MobileDesign/Goals.png",
    alt: "Goals Screen"
  },
  {
    src: "/InfluAgentMobileDesign/MobileDesign/Overview.png",
    alt: "Overview Screen"
  },
  {
    src: "/InfluAgentMobileDesign/MobileDesign/Reflect.png",
    alt: "Reflect Screen"
  },
  {
    src: "/InfluAgentMobileDesign/MobileDesign/Align.png",
    alt: "Align Screen"
  }
]

function AppPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mobileImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 py-16 bg-background rounded-2xl">
      {/* Mobile App Carousel */}
      <div className="relative w-full max-w-[320px] mx-auto" style={{ aspectRatio: '9/19.5' }}>
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          {mobileImages.map((image, index) => (
            <div
              key={image.src}
              className="absolute w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <div className="relative w-full h-full rounded-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-contain rounded-md"
                  width={1536}
                  height={1200}
                  sizes="(max-width: 1536px) 90vw, 1200px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Dot Navigation */}
        <div className="absolute bottom-[2.5em] left-0 right-0 flex justify-center gap-2">
          {mobileImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Mobile App Features */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Mobile App for On-the-Go Control</h3>
        <p className="text-gray-600">
          Stay connected with your AI agent anytime, anywhere. Our mobile app puts the power of
          InfluAgent in your pocket. Check out the detail prototype design here.
        </p>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Real-time Monitoring</h4>
              <p className="text-gray-600">Track your agent's activities, view posts, comments, and trending data in real-time.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Agent Communication</h4>
              <p className="text-gray-600">Chat with your AI agent to adjust strategies, fine-tune tasks, and provide feedback.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Smart Notifications</h4>
              <p className="text-gray-600">Receive instant alerts for important actions, approval requests, and performance milestones.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Quick Authorization</h4>
              <p className="text-gray-600">Seamlessly manage permissions and authenticate social media accounts on the go.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPreview() {
  const [imageStates, setImageStates] = useState(
    images.map((_, index) => ({
      zIndex: index === 0 ? 20 : 10,
      position: index === 0 ? 'front' : 'back'
    }))
  )

  useEffect(() => {
    const timer = setInterval(handleTransition, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleTransition = () => {
    setImageStates(prev => {
      const newStates = [...prev]
      const frontIndex = newStates.findIndex(state => state.position === 'front')
      const nextIndex = (frontIndex + 1) % images.length

      newStates[frontIndex] = {
        zIndex: 20,
        position: 'transitioning'
      }
      newStates[nextIndex] = {
        zIndex: 10,
        position: 'front'
      }

      setTimeout(() => {
        setImageStates(current => {
          const finalStates = [...current]
          finalStates[frontIndex] = {
            zIndex: 10,
            position: 'back'
          }
          return finalStates
        })
      }, 1000)

      return newStates
    })
  }

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div id="ai-driven-automation" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">AI-Driven Automation</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Autonomous agent handling daily social media operations, from posting to engagement. AI develops and executes customized, long-term growth strategies.
        </p>
        
        {/* Web Dashboard Preview */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10]" style={{ perspective: "2000px" }}>
          <div className="relative w-full h-full flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
            {images.map((image, index) => (
              <div 
                key={image.src}
                className="absolute transition-all duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                style={{
                  transform: imageStates[index].position === 'transitioning'
                    ? 'translate3d(100%, -100%, -1000px) rotate3d(1, 1, 0.2, 45deg)'
                    : imageStates[index].position === 'front'
                      ? 'translate3d(0%, -2%, 0) rotate3d(1, -0.5, 0.15, 0deg) scale(0.95)'
                      : 'translate3d(0%, -2%, -500px) rotate3d(1, -0.5, 0.15, 0deg) scale(0.85)',
                  zIndex: imageStates[index].zIndex,
                  opacity: imageStates[index].position === 'transitioning' ? 0.7 : 1,
                  transformOrigin: '50% 50%',
                  width: '100%',
                  height: '100%',
                  display: imageStates[index].position === 'back' && index !== (imageStates.findIndex(state => state.position === 'front') + 1) % images.length ? 'none' : 'block'
                }}
              >
                <div className="relative w-full h-full mx-auto">
                  <div 
                    className="relative w-full h-full bg-card rounded-lg"
                    style={{ 
                      border: '3px solid hsl(var(--border))',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="rounded-lg object-contain"
                        sizes="(max-width: 1536px) 90vw, 1200px"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App Preview Section */}
        <AppPreview />
      </div>
    </section>
  )
}


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
      // Find current front image
      const frontIndex = newStates.findIndex(state => state.position === 'front')
      const nextIndex = (frontIndex + 1) % images.length

      // Update states
      newStates[frontIndex] = {
        zIndex: 20,
        position: 'transitioning'
      }
      newStates[nextIndex] = {
        zIndex: 10,
        position: 'front'
      }

      // After animation, move transitioning image to back
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
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">AI-Driven Automation</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Autonomous agent handling daily social media operations, from posting to engagement. AI develops and executes customized, long-term growth strategies.
        </p>
        
        {/* 3D Scene Container */}
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
                      ? 'translate3d(0%, -2%, 0) rotate3d(1, -0.5, 0.15, 15deg) scale(0.95)'
                      : 'translate3d(0%, -2%, -500px) rotate3d(1, -0.5, 0.15, 15deg) scale(0.85)',
                  zIndex: imageStates[index].zIndex,
                  opacity: imageStates[index].position === 'transitioning' ? 0.7 : 1,
                  transformOrigin: '50% 50%',
                  width: '100%',
                  height: '100%',
                  display: imageStates[index].position === 'back' && index !== (imageStates.findIndex(state => state.position === 'front') + 1) % images.length ? 'none' : 'block'
                }}
              >
                {/* Card Container */}
                <div className="relative w-full h-full mx-auto">
                  {/* Main Image Container */}
                  <div 
                    className="relative w-full h-full bg-white rounded-lg"
                    style={{ 
                      border: '3px solid rgba(191, 219, 254, 0.8)',
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
      </div>
    </section>
  )
}


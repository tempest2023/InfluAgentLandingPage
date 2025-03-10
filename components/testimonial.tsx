"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John D.",
    role: "Social Media Influencer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=b6e3f4",
    quote: "InfluAgent transformed my social media strategy. Incredible growth!",
    rating: 5,
  },
  {
    name: "Jane S.",
    role: "Small Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane&backgroundColor=ffdfbf",
    quote: "It's like having a full-time social media team working 24/7.",
    rating: 5,
  },
  {
    name: "Alex J.",
    role: "Content Creator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=d1d4f9",
    quote: "AI-driven insights helped me understand my audience better.",
    rating: 4,
  },
  {
    name: "Emily C.",
    role: "Marketing Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=c0aede",
    quote: "The collaborative dashboard made our team work seamlessly.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Startup Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=b6e3f4",
    quote: "InfluAgent accelerated our brand's growth on social media.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Freelance Writer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf",
    quote: "Helped me maintain a consistent online presence effortlessly.",
    rating: 4,
  },
  {
    name: "David K.",
    role: "E-commerce Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=d1d4f9",
    quote: "Saw a significant increase in engagement and sales.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    role: "Non-profit Organizer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa&backgroundColor=c0aede",
    quote: "InfluAgent helped us reach more supporters and volunteers.",
    rating: 5,
  },
  {
    name: "Robert T.",
    role: "Tech Blogger",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert&backgroundColor=b6e3f4",
    quote: "The AI's content suggestions are surprisingly on-point.",
    rating: 4,
  },
  {
    name: "Olivia P.",
    role: "Fashion Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia&backgroundColor=ffdfbf",
    quote: "Streamlined my social media presence across multiple platforms.",
    rating: 5,
  },
  {
    name: "Kevin W.",
    role: "Fitness Coach",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin&backgroundColor=d1d4f9",
    quote: "Helped me connect with more clients through social media.",
    rating: 5,
  },
  {
    name: "Sophia G.",
    role: "Artist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia&backgroundColor=c0aede",
    quote: "InfluAgent's AI understands my artistic style surprisingly well.",
    rating: 4,
  },
  {
    name: "Daniel H.",
    role: "Podcast Host",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel&backgroundColor=b6e3f4",
    quote: "Grew my podcast audience significantly with InfluAgent's help.",
    rating: 5,
  },
  {
    name: "Natalie F.",
    role: "Travel Blogger",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Natalie&backgroundColor=ffdfbf",
    quote: "Keeps my travel content flowing even when I'm off the grid.",
    rating: 5,
  },
  {
    name: "Chris B.",
    role: "Local Restaurant Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris&backgroundColor=d1d4f9",
    quote: "Boosted our local presence and brought in more customers.",
    rating: 4,
  },
  {
    name: "Amanda Y.",
    role: "HR Specialist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda&backgroundColor=c0aede",
    quote: "Improved our company's employer branding on social media.",
    rating: 5,
  },
]

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    const containerElement = containerRef.current
    
    if (scrollElement && containerElement) {
      // Clone testimonials for smooth infinite scroll
      const clonedItems = scrollElement.innerHTML
      scrollElement.innerHTML = clonedItems + clonedItems

      let scrollPos = 0
      const scrollSpeed = 0.5
      let animationFrameId: number

      const scroll = () => {
        if (!scrollElement || !containerElement) return

        scrollPos += scrollSpeed
        if (scrollPos >= scrollElement.scrollWidth / 2) {
          scrollPos = 0
        }
        scrollElement.scrollLeft = scrollPos

        animationFrameId = requestAnimationFrame(scroll)
      }

      // Start scrolling
      scroll()

      // Pause on hover or touch
      const pauseScroll = () => cancelAnimationFrame(animationFrameId)
      const resumeScroll = () => {
        cancelAnimationFrame(animationFrameId)
        scroll()
      }

      containerElement.addEventListener('mouseenter', pauseScroll)
      containerElement.addEventListener('mouseleave', resumeScroll)
      containerElement.addEventListener('touchstart', pauseScroll)
      containerElement.addEventListener('touchend', resumeScroll)

      return () => {
        cancelAnimationFrame(animationFrameId)
        containerElement.removeEventListener('mouseenter', pauseScroll)
        containerElement.removeEventListener('mouseleave', resumeScroll)
        containerElement.removeEventListener('touchstart', pauseScroll)
        containerElement.removeEventListener('touchend', resumeScroll)
      }
    }
  }, [])

  return (
    <section id="testimonial" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
        <div ref={containerRef} className="relative">
          <div 
            ref={scrollRef} 
            className="flex overflow-x-hidden space-x-6 pb-4 select-none"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


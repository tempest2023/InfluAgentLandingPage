"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John D.",
    role: "Social Media Influencer",
    image: "/placeholder.svg?height=60&width=60&text=JD",
    quote: "InfluAgent transformed my social media strategy. Incredible growth!",
    rating: 5,
  },
  {
    name: "Jane S.",
    role: "Small Business Owner",
    image: "/placeholder.svg?height=60&width=60&text=JS",
    quote: "It's like having a full-time social media team working 24/7.",
    rating: 5,
  },
  {
    name: "Alex J.",
    role: "Content Creator",
    image: "/placeholder.svg?height=60&width=60&text=AJ",
    quote: "AI-driven insights helped me understand my audience better.",
    rating: 4,
  },
  {
    name: "Emily C.",
    role: "Marketing Manager",
    image: "/placeholder.svg?height=60&width=60&text=EC",
    quote: "The collaborative dashboard made our team work seamlessly.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Startup Founder",
    image: "/placeholder.svg?height=60&width=60&text=MR",
    quote: "InfluAgent accelerated our brand's growth on social media.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Freelance Writer",
    image: "/placeholder.svg?height=60&width=60&text=SL",
    quote: "Helped me maintain a consistent online presence effortlessly.",
    rating: 4,
  },
  {
    name: "David K.",
    role: "E-commerce Owner",
    image: "/placeholder.svg?height=60&width=60&text=DK",
    quote: "Saw a significant increase in engagement and sales.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    role: "Non-profit Organizer",
    image: "/placeholder.svg?height=60&width=60&text=LM",
    quote: "InfluAgent helped us reach more supporters and volunteers.",
    rating: 5,
  },
  {
    name: "Robert T.",
    role: "Tech Blogger",
    image: "/placeholder.svg?height=60&width=60&text=RT",
    quote: "The AI's content suggestions are surprisingly on-point.",
    rating: 4,
  },
  {
    name: "Olivia P.",
    role: "Fashion Designer",
    image: "/placeholder.svg?height=60&width=60&text=OP",
    quote: "Streamlined my social media presence across multiple platforms.",
    rating: 5,
  },
  {
    name: "Kevin W.",
    role: "Fitness Coach",
    image: "/placeholder.svg?height=60&width=60&text=KW",
    quote: "Helped me connect with more clients through social media.",
    rating: 5,
  },
  {
    name: "Sophia G.",
    role: "Artist",
    image: "/placeholder.svg?height=60&width=60&text=SG",
    quote: "InfluAgent's AI understands my artistic style surprisingly well.",
    rating: 4,
  },
  {
    name: "Daniel H.",
    role: "Podcast Host",
    image: "/placeholder.svg?height=60&width=60&text=DH",
    quote: "Grew my podcast audience significantly with InfluAgent's help.",
    rating: 5,
  },
  {
    name: "Natalie F.",
    role: "Travel Blogger",
    image: "/placeholder.svg?height=60&width=60&text=NF",
    quote: "Keeps my travel content flowing even when I'm off the grid.",
    rating: 5,
  },
  {
    name: "Chris B.",
    role: "Local Restaurant Owner",
    image: "/placeholder.svg?height=60&width=60&text=CB",
    quote: "Boosted our local presence and brought in more customers.",
    rating: 4,
  },
  {
    name: "Amanda Y.",
    role: "HR Specialist",
    image: "/placeholder.svg?height=60&width=60&text=AY",
    quote: "Improved our company's employer branding on social media.",
    rating: 5,
  },
]

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const scrollAnimation = () => {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
          scrollElement.scrollLeft = 0
        } else {
          scrollElement.scrollLeft += 1
        }
      }

      const animationInterval = setInterval(scrollAnimation, 30)

      return () => clearInterval(animationInterval)
    }
  }, [])

  return (
    <section id="testimonial" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
        <div ref={scrollRef} className="flex overflow-x-hidden space-x-6 pb-4" style={{ scrollBehavior: "smooth" }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
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
    </section>
  )
}


import { Target, Zap, LayoutDashboard, Clock, DollarSign, Compass } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Time-Consuming Process",
    description: "Building an influencer presence requires consistent posting, interaction, and engagement—nearly impossible to maintain at scale.",
  },
  {
    icon: DollarSign,
    title: "Inefficient & Costly",
    description: "Traditional social media management through agencies or freelancers is expensive with inconsistent quality.",
  },
  {
    icon: Compass,
    title: "Lack of Strategy",
    description: "Many accounts post regularly but lack clear strategy for targeting audience and optimal timing.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Problems We Solve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


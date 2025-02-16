import { Target, Zap, LayoutDashboard } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Goal Definition & Growth Plan",
    description: "Set your social media goals and get a customized growth plan tailored to your objectives.",
  },
  {
    icon: Zap,
    title: "Auto Execution of Daily Tasks",
    description:
      "Our AI agent automatically performs daily tasks to grow and engage your audience, saving you time and effort.",
  },
  {
    icon: LayoutDashboard,
    title: "Collaborative Dashboard",
    description:
      "Monitor progress, analyze performance, and collaborate with team members in real-time through our intuitive dashboard.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
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


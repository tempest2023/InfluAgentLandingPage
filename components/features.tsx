import { Clock, DollarSign, Compass, Key, MessageSquare, CheckSquare, BarChart2, LineChart, Edit } from "lucide-react"

const problems = [
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

const features = [
  {
    imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80",
    title: "One-Click Twitter Authorization",
    description: "Connect your Twitter account with a single click, no complex setup required. Our secure OAuth integration ensures your credentials stay protected.",
    alt: "Twitter one-click authorization"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    title: "Strategic AI Communication",
    description: "Define specific growth goals, customize your brand voice, and identify ideal followers through natural conversation with your AI Agent.",
    alt: "Communicating with AI Agent for social media strategy"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    title: "Autonomous Task Execution",
    description: "AI automatically breaks down your objectives into daily tasks, creating content and engaging with your audience 24/7 even while you sleep.",
    alt: "AI agent executing daily social media tasks"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    title: "Agent Management Dashboard",
    description: "Monitor all posts, interactions, and browsing activities in real-time. Get notifications for high-risk actions that require your approval.",
    alt: "Agent management dashboard"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    title: "Performance Dashboard",
    description: "Track follower growth, engagement rates, and content performance. Identify traffic sources and stay informed about trending topics in your niche.",
    alt: "Performance analytics dashboard"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    title: "Collaborative Content Creation", 
    description: "Work alongside your AI Agent to draft, edit, and perfect your posts. Get AI-powered suggestions to improve engagement and test multiple content versions.",
    alt: "Collaborative content creation with AI"
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Problems We Solve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <problem.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 mt-16">Product Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={feature.imageUrl} 
                  alt={feature.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


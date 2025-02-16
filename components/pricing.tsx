import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$999",
    period: "month",
    features: [
      "Up to 5 posts per day",
      "75 automated comments/replies per day",
      "250 views/day",
      "AI Agent runs an average of 4 hours/day for automated tasks",
      "Dashboard: Extended analytics with advanced growth suggestions, deeper engagement insights, and customized reporting",
    ],
    description: "Ideal for personal users wanting essential engagement and moderate growth",
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$1999",
    period: "month",
    features: [
      "Free trial 14 days for Pro plan",
      "Up to 10 posts per day",
      "150 automated comments/replies per day",
      "500 views/day",
      "AI Agent runs an average of 8 hours/day",
      "Dashboard: Extended analytics with advanced growth suggestions, deeper engagement insights, and customized reporting",
    ],
    description: "Suited for personal users wanting faster growth and more robust analytics",
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Fully customizable posting strategy",
      "Scalable daily comments, views, and interactions based on your needs",
      "Dedicated account manager and custom dashboard configurations",
    ],
    description: "Individual offer for SMBs & Influencers",
    cta: "Contact Sales",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted ? "ring-2 ring-blue-500 transform scale-105" : ""
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">/{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


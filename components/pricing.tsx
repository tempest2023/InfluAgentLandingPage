import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$99",
    period: "month",
    features: [
      "5 AI-generated posts/day",
      "75 automated comments/day",
      "250 targeted views/day",
      "4 hours/day AI agent runtime",
      "Basic analytics dashboard"
    ],
    description: "For personal brand builders",
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$500",
    period: "month",
    features: [
      "14-day free trial included",
      "10 AI-optimized posts/day",
      "150 strategic comments/day",
      "500 curated views/day",
      "24 hours/day AI agent runtime",
      "Extended analytics & insights",
      "Advanced growth suggestions"
    ],
    description: "For serious creators",
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Customizable posting strategy",
      "Unlimited daily engagement",
      "Long-term AI agent availability",
      "Dedicated account manager",
      "Custom dashboard setup",
      "Priority support & training"
    ],
    description: "For businesses & influencers",
    cta: "Contact Sales",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start pt-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:scale-105 hover:bg-indigo-600 
                hover:shadow-[0_20px_40px_rgba(79,70,229,0.4)] transition-all duration-300 group
                ${plan.highlighted ? "ring-2 ring-blue-500 relative shadow-[0_12px_35px_rgb(0,0,0,0.15)]" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-white">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold group-hover:text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 group-hover:text-indigo-200">/{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6 group-hover:text-indigo-200">{plan.description}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 group-hover:text-white mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 group-hover:text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 flex justify-center">
                  <Button 
                    className={`px-8 transition-colors duration-300 ${
                      plan.highlighted 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white group-hover:bg-white group-hover:text-indigo-600 shadow-xl" 
                        : "border-gray-200 hover:bg-gray-100 group-hover:bg-white group-hover:text-indigo-600 group-hover:border-transparent"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


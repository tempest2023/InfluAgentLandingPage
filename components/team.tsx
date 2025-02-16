import Image from "next/image"
import { Linkedin, Globe } from "lucide-react"

const teamMembers = [
  {
    name: "Tempest",
    role: "Co-Founder & CEO",
    bio: "Big Tech Company full-stack engineer, with multiple entrepreneurial experiences, focusing on web3, AI, system, deeplearning and other fields. Proficient in rapid product delivery, project management control, integration of production, learning, research, innovation and investment resources. A staunch advocate of AGI (Artificial General Intelligence).",
    experience: ["Software Engineer @Tiktok", "FullStack Engineer @Alipay"],
    linkedin: "https://www.linkedin.com/in/taoren-pitt/",
    website: "https://tempest.fun/",
  },
  {
    name: "Orion",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning from MIT, specializing in reinforcement learning and multimodal AI systems. Former researcher at OpenAI, contributing to cutting-edge advancements in LLMs and AGI safety. Passionate about the intersection of AI and human cognition.",
    experience: ["AI Researcher @OpenAI", "ML Scientist @Meta AI"],
    linkedin: "https://www.linkedin.com/in/orion-research/",
    website: "https://orionai.com/",
  },
  {
    name: "Vega",
    role: "Lead Software Engineer",
    bio: "Ex-Amazon senior engineer with extensive experience in cloud architecture, backend development, and Web3 smart contract engineering. Strong background in building high-performance systems and optimizing AI-driven applications.",
    experience: ["Senior Software Engineer @Amazon", "Blockchain Engineer @Binance"],
    linkedin: "https://www.linkedin.com/in/vega-dev/",
    website: "https://vega.dev/",
  },
  {
    name: "Lyra",
    role: "Head of Product",
    bio: "Product visionary with a decade of experience in AI startups and Big Tech. Former PM at Microsoft leading AI-driven products from ideation to launch. Specializes in user experience, market strategy, and scaling AGI applications.",
    experience: ["Senior Product Manager @Microsoft", "AI Product Lead @Anthropic"],
    linkedin: "https://www.linkedin.com/in/lyra-product/",
    website: "https://lyrapm.com/",
  },
  {
    name: "Atlas",
    role: "Head of Business & Strategy",
    bio: "Seasoned entrepreneur and former VC investor with deep experience in AI and Web3 startups. Previously led growth initiatives at Tesla, scaling innovative projects to global markets. Expert in fundraising, partnerships, and go-to-market strategy.",
    experience: ["Growth & Strategy Lead @Tesla", "Investor @Sequoia Capital"],
    linkedin: "https://www.linkedin.com/in/atlas-strategy/",
    website: "https://atlasgrowth.com/",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                  </div>
                  <Image
                    src={`/placeholder.svg?height=80&width=80&text=${member.name}`}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                <div className="mb-4">
                  {member.experience.map((exp, idx) => (
                    <p key={idx} className="text-sm text-gray-500">
                      {exp}
                    </p>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


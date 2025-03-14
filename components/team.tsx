import Image from "next/image"
import { Linkedin, Globe, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Tempest",
    role: "Co-Founder & CEO",
    bio: "A staunch advocate of AGI. 5+ years of experience in the software engineering, several years of experience in AI/Web3 entrepreneurship, PhD Candidate @UCR, published papers at the 2024 RTSS(real-time systems symposium).",
    experience: ["Software Engineer @TikTok", "Ex-Frontend Engineer @Alipay"],
    linkedin: "https://www.linkedin.com/in/taoren-pitt/",
    website: "https://tempest.fun/",
    email: "tempest.ren@tiktok.com",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGPa-fE0hAM9w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1635805570581?e=1747267200&v=beta&t=VPX5O5VMDzlto6QV69Xi30-eASpzxx4Nzz0jtPtSKFA"
  },
  // {
  //   name: "Orion",
  //   role: "Head of AI Research",
  //   bio: "PhD in Machine Learning from MIT, specializing in reinforcement learning and multimodal AI systems. Former researcher at OpenAI, contributing to cutting-edge advancements in LLMs and AGI safety. Passionate about the intersection of AI and human cognition.",
  //   experience: ["AI Researcher @OpenAI", "ML Scientist @Meta AI"],
  //   linkedin: "https://www.linkedin.com/in/orion-research/",
  //   website: "https://orionai.com/",
  // },
  // {
  //   name: "Vega",
  //   role: "Lead Software Engineer",
  //   bio: "Ex-Amazon senior engineer with extensive experience in cloud architecture, backend development, and Web3 smart contract engineering. Strong background in building high-performance systems and optimizing AI-driven applications.",
  //   experience: ["Senior Software Engineer @Amazon", "Blockchain Engineer @Binance"],
  //   linkedin: "https://www.linkedin.com/in/vega-dev/",
  //   website: "https://vega.dev/",
  // },
  // {
  //   name: "Lyra",
  //   role: "Head of Product",
  //   bio: "Product visionary with a decade of experience in AI startups and Big Tech. Former PM at Microsoft leading AI-driven products from ideation to launch. Specializes in user experience, market strategy, and scaling AGI applications.",
  //   experience: ["Senior Product Manager @Microsoft", "AI Product Lead @Anthropic"],
  //   linkedin: "https://www.linkedin.com/in/lyra-product/",
  //   website: "https://lyrapm.com/",
  // },
  // {
  //   name: "Atlas",
  //   role: "Head of Business & Strategy",
  //   bio: "Seasoned entrepreneur and former VC investor with deep experience in AI and Web3 startups. Previously led growth initiatives at Tesla, scaling innovative projects to global markets. Expert in fundraising, partnerships, and go-to-market strategy.",
  //   experience: ["Growth & Strategy Lead @Tesla", "Investor @Sequoia Capital"],
  // },
  {
    name: "Join us as a Co-Founder",
    role: "",
    bio: "We are looking for co-founders who is passionate about AGI and has a strong background in Business & Finance, or UI/UX design & Product Design, or Software Engineering & FullStack Development.",
    experience: ["Business & Financial Expert", "UI/UX Design & Product Design Expert", "FullStack AI Expert"],
    website: "mailto:tempest.ren@tiktok.com",
    email: "tempest.ren@tiktok.com"
  }
]

export default function Team() {
  return (
    <section id="team" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-[90rem] mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] max-w-md flex-shrink-0">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                  </div>
                  <Image
                    src={member.image || `/placeholder.svg?height=80&width=80&text=${member.name}`}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600 mb-4 line-clamp-4">{member.bio}</p>
                <div className="mb-4">
                  {member.experience.map((exp, idx) => (
                    <p key={idx} className="text-sm text-gray-500">
                      {exp}
                    </p>
                  ))}
                </div>
                <div className="flex space-x-4">
                {member.linkedin && <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>}
                  {member.website && <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Globe className="w-5 h-5" />
                  </a>}
                  {member.email && <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Mail className="w-5 h-5" />
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed w-full bg-white bg-opacity-90 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm">
            <Image
              src="/camera.webp"
              alt="InfluAgent Logo"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold text-gray-800">InfluAgent</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#team" className="text-gray-600 hover:text-gray-900">
            Team
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/InfluAgentPreSeedBP/index.html" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Pre-Seed BP
          </Link>
        </nav>
        <Button variant="outline">Get Started</Button>
      </div>
    </header>
  )
}


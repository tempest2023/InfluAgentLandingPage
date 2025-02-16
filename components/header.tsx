import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed w-full bg-white bg-opacity-90 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          InfluAgent
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
        </nav>
        <Button variant="outline">Get Started</Button>
      </div>
    </header>
  )
}


"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
// import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white shadow-sm">
            <Image
              src="/icon.png"
              alt="InfluAgent Logo"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold text-gray-800 dark:text-white">InfluAgent</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Pricing
          </Link>
          <Link href="#team" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Team
          </Link>
          <Link href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            FAQ
          </Link>
          <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Contact
          </Link>
          <Link href="/InfluAgentPreSeedBP/index.html" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
            Pre-Seed BP
          </Link>
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="p-1">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {/* <Button variant="outline" className="hidden md:inline-flex">Get Started</Button> */}
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-4 py-3 space-y-3">
          <Link href="#features" className="block text-gray-600 hover:text-gray-900 py-2">
            Features
          </Link>
          <Link href="#pricing" className="block text-gray-600 hover:text-gray-900 py-2">
            Pricing
          </Link>
          <Link href="#team" className="block text-gray-600 hover:text-gray-900 py-2">
            Team
          </Link>
          <Link href="#faq" className="block text-gray-600 hover:text-gray-900 py-2">
            FAQ
          </Link>
          <Link href="#contact" className="block text-gray-600 hover:text-gray-900 py-2">
            Contact
          </Link>
          <Link href="/InfluAgentPreSeedBP/index.html" className="block text-indigo-600 hover:text-indigo-800 font-medium py-2">
            Pre-Seed BP
          </Link>
          {/* <Button variant="outline" className="w-full mt-4">Get Started</Button> */}
        </div>
      </div>
    </header>
  )
}


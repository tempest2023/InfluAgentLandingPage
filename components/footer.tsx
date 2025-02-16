import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              InfluAgent
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} InfluAgent. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


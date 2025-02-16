import Image from "next/image"

export default function DashboardPreview() {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Collaborative Dashboard</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our intuitive dashboard allows you and your team to monitor progress, analyze performance, and collaborate in
          real-time.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform -rotate-3 shadow-lg"></div>
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="InfluAgent Collaborative Dashboard"
            width={1200}
            height={600}
            className="relative rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}


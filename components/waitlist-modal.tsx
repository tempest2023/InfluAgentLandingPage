'use client'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check } from "lucide-react"
import { useWaitlist } from "@/contexts/waitlist-context"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"

export default function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    fetchWaitlistCount()
  }, [])

  const fetchWaitlistCount = async () => {
    try {
      const response = await fetch('/api/waitlist/count')
      const data = await response.json()
      if (data.error) throw new Error(data.error)
      setWaitlistCount(data.count)
    } catch (error) {
      console.error('Error fetching waitlist count:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/waitlist/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      toast({
        title: "Success!",
        description: "You have successfully joined the waitlist.",
      })

      setWaitlistCount(data.count)
      setIsSuccess(true)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
      setEmail("")
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    closeWaitlist()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90%] md:w-[60%] max-w-screen-lg mx-auto p-4 md:p-6">
        {isSuccess ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Welcome to InfluAgent!</h2>
              <p className="text-gray-600">Thank you for your support. You have successfully joined the waitlist</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg space-y-2">
              <p className="font-medium">Your current position in the waitlist:</p>
              <p className="text-3xl font-bold text-blue-600">#{waitlistCount}</p>
              <p className="text-sm text-gray-600">Expected public release: Q2 2025</p>
            </div>
            <Button onClick={handleClose} className="w-full">Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">Join InfluAgent Beta Testing Program</DialogTitle>
              <DialogDescription className="text-sm md:text-base">
                We are offering exclusive access to selected users
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm md:text-base">Beta Testing Program</h4>
                  <ul className="text-xs md:text-sm space-y-2 md:space-y-3">
                    <li className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Early access to new features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Dedicated technical support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Influence product direction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Free to use Pro plan</span>
                    </li>
                  </ul>
                </div>
                <div className="text-sm text-gray-500">
                  <p className="mb-2"><span className="font-semibold text-blue-600">{waitlistCount}</span> people have joined the waitlist</p>
                  <p>Expected public release: Q2 2025</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Join the waitlist"}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
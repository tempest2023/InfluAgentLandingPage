'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check } from "lucide-react"

import { useWaitlist } from "@/contexts/waitlist-context"

export default function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const waitlistCount = 223 // 模拟等待列表人数

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: 实现邮箱提交逻辑
    setTimeout(() => {
      setIsSubmitting(false)
      closeWaitlist()
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeWaitlist}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join InfluAgent Beta Testing Program</DialogTitle>
          <DialogDescription>
            We are offering exclusive access to selected users
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Beta Testing Program</h4>
              <ul className="text-sm space-y-3">
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
      </DialogContent>
    </Dialog>
  )
}
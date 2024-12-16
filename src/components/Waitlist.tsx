'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { PlayCircle } from 'lucide-react'
import WomenSoccer from '@/assets/women-soccer.png'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Submitted:', { email, agreed })
  }

  return (
    <section className="container px-4 md:px-6 py-6 lg:py-12 mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <Image
            src={WomenSoccer}
            alt="Football players celebrating"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform" />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-xl">
            Join our waitlist for access to exclusive{' '}
            <span className="text-emerald-400">Premium</span>{' '}
            football content and news about your favourite clubs.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold px-8">
                Subscribe
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                By Subscribing you agree to receive emails and updates regularly
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


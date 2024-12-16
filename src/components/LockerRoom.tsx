import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import MaleFootballer from "@/assets/male-football-players.png";
import Everything from '@/assets/everything-you.png';
import BoyTeen from '@/assets/boy-teenager.png'
import Fans from '@/assets/group-of-passionate-sports-fans.png'


const features = [
  {
    title: "Exclusive player interviews",
    image: Everything,
    href: "/interviews"
  },
  {
    title: "Announcements (Player merch)",
    image: BoyTeen,
    href: "/announcements"
  },
  {
    title: "Interactive fan engagement",
    image: Fans,
    href: "/engagement"
  }
]

export function LockerRoom() {
  return (
    <section className="container px-4 md:px-6 py-6 lg:py-12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Locker Room
      </h2>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={MaleFootballer}
              alt="Players relaxing on the field"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Get exclusive behind the scenes access to what we&apos;re doing in the Grassroot space
            </h3>
            <p className="text-muted-foreground text-sm">
              The Player Profile feature offers a dedicated space for players to showcase their skills,
              achievements, and journey in football. Each profile includes essential details like position,
              playing history, and performance stats.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href} className="block">
              <div className="overflow-hidden transition-colors hover:bg-accent">
                <div className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="font-medium">{feature.title}</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


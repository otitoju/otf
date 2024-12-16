// 'use client'

// import Image from "next/image"
// import Link from "next/link"
// import { Star } from 'lucide-react'
// import { Card } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import SmartPhone from '@/assets/player-profile.png'
// import Playstore from '@/assets/playstore.png'
// import Appstore from '@/assets/apple-store.png'
// import Uniform from '@/assets/uniform.png'


// interface Feature {
//   id: number
//   title: string
//   description: string
//   image: any
// }

// const features: Feature[] = [
//   {
//     id: 1,
//     title: "Player profile",
//     description: "The Player Profile feature offers a dedicated space for players to showcase their skills, achievements, and journey in football. Each profile includes essential details like position, playing history, and performance stats.",
//     image: SmartPhone
//   },
//   // Add more features here
// ]

// export function DownloadInfoSection() {
//   return (
//     <section className="container py-16 md:py-24">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <DownloadAppSection />

//         <div className="p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl">
//           <Carousel className="w-full">
//             <CarouselContent>
//               {features.map((feature) => (
//                 <CarouselItem key={feature.id}>
//                   <div className="flex h-full items-center justify-between">
//                     <div className="space-y-2 text-left">
//                       <h3 className="text-2xl font-semibold flex items-center justify-start gap-2">
//                         <Image
//                           src={Uniform}
//                           alt="profile"
//                           width={24}
//                           height={24}
//                           className="w-6 h-6"
//                         />
//                         {feature.title}
//                       </h3>
//                       <p className="text-muted-foreground max-w-[280px] text-sm mt-2">{feature.description}</p>
//                     </div>

//                     <div className="relative max-w-[280px]">
//                       <Image
//                         src={feature.image}
//                         alt={feature.title}
//                         width={280}
//                         height={560}
//                         className="rounded-2xl shadow-2xl"
//                       />
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   )
// }


// function DownloadAppSection() {
//     return (
//       <div className="space-y-4">
//         {/* Heading */}
//         <h3 className="text-4xl font-semibold text-gray-800">Download the App,<br/> Dominate the Pitch!</h3>
  
//         {/* Buttons */}
//         <div className="flex space-x-4">
//           {/* Google Play Button */}
//           <a
//             href="#"
//             className="flex items-center space-x-2 bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition"
//           >
//             <Image 
//               src={Playstore}
//               alt="playstore logo"
//               width={20}
//               height={20}
//               className="h-5 w-5"
//             />
//             <div className="text-left">
//               <p className="text-xs">Get it on</p>
//               <p className="text-sm font-semibold">Google Play</p>
//             </div>
//           </a>
  
//           {/* App Store Button */}
//           <a
//             href="#"
//             className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
//           >
//             <Image 
//               src={Appstore}
//               alt="Apple logo"
//               width={20}
//               height={20}
//               className="h-5 w-5"
//             />
//             <div className="text-left">
//               <p className="text-xs">Download on the</p>
//               <p className="text-sm font-semibold">App Store</p>
//             </div>
//           </a>
//         </div>
  
//         {/* Rating and Reviews */}
//         <div className="flex items-center space-x-2 text-gray-700">
//           {/* Star Icon */}
//           <span className="text-yellow-500 text-xl">★</span>
//           <span className="font-semibold text-sm">5.0</span>
//           <a href="#" className="text-blue-600 underline text-sm">
//             612 Reviews
//           </a>
//         </div>
//       </div>
//     );
//   }

'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SmartPhone from '@/assets/player-profile.png'
import Playstore from '@/assets/playstore.png'
import Appstore from '@/assets/apple-store.png'
import Uniform from '@/assets/uniform.png'

const features = [
  {
    id: 1,
    title: "Player profile",
    description: "The Player Profile feature offers a dedicated space for players to showcase their skills, achievements, and journey in football. Each profile includes essential details like position, playing history, and performance stats.",
    image: SmartPhone
  },
]

export function DownloadInfoSection() {
  return (
    <section className="container px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <DownloadAppSection />

        {/* Carousel Section */}
        <div className="p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl">
          <Carousel className="w-full">
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id}>
                  <div className="flex flex-col md:flex-row h-full items-center justify-between gap-6">
                    {/* Text Section */}
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-semibold flex items-center justify-center md:justify-start gap-2">
                        <Image
                          src={Uniform}
                          alt="profile"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-[320px] mx-auto md:mx-0">
                        {feature.description}
                      </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative max-w-full md:max-w-[280px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={280}
                        height={560}
                        className="rounded-2xl shadow-2xl mx-auto"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

function DownloadAppSection() {
    return (
      <div className="space-y-4">
        {/* Heading */}
        <h3 className="text-4xl font-semibold text-gray-800">Download the App,<br/> Dominate the Pitch!</h3>
  
        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center space-x-2 bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition"
          >
            <Image 
              src={Playstore}
              alt="playstore logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>
  
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <Image 
              src={Appstore}
              alt="Apple logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <div className="text-left">
              <p className="text-xs">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>
        </div>
  
        {/* Rating and Reviews */}
        <div className="flex items-center space-x-2 text-gray-700">
          {/* Star Icon */}
          <span className="text-yellow-500 text-xl">★</span>
          <span className="font-semibold text-sm">5.0</span>
          <a href="#" className="text-blue-600 underline text-sm">
            612 Reviews
          </a>
        </div>
      </div>
    );
  }

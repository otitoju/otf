// 'use client'

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import PP from '@/assets/pp.png'
// interface Testimonial {
//   id: number
//   quote: string
//   author: string
//   role: string
//   image: any
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     quote: "The ultimate football social media experience any fan could be part of!",
//     author: "Josh Prescott",
//     role: "U14 Coach",
//     image: PP
//   },
//   // Add more testimonials here
// ]

// export function CTASection() {
//   return (
//     <section className="bg-[#641C3C] text-white container px-4 md:px-6 py-6 lg:py-12 mx-auto">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Ready to get started?
//           </h2>
//           <p className="text-white/80 max-w-lg">
//             Lorem ipsum dolor sit amet consectetur. Imperdiet faucibus et in sed nibh scelerisque odio. Vel volutpat diam posuere mauris tristique dui amet.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Button size="lg" className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full">
//               Download App
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-black font-semibold rounded-full">
//               Learn More
//             </Button>
//           </div>
//         </div>

//         <div className="">
//           <Carousel className="w-full max-w-lg">
//             <CarouselContent>
//               {testimonials.map((testimonial) => (
//                 <CarouselItem key={testimonial.id}>
//                   <blockquote className="space-y-6">
//                     <div className="relative">
//                       {/* <span className="text-emerald-400 text-6xl absolute -top-4 -left-4">"</span> */}
//                       <p className="text-2xl md:text-3xl font-medium leading-relaxed pl-8">
//                         {testimonial.quote}
//                       </p>
//                       {/* <span className="text-emerald-400 text-6xl absolute -bottom-8 right-0">""</span> */}
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <Image
//                         src={testimonial.image}
//                         alt={testimonial.author}
//                         width={48}
//                         height={48}
//                         className="rounded-full"
//                       />
//                       <div>
//                         <div className="font-semibold">{testimonial.author}</div>
//                         <div className="text-white/80">{testimonial.role}</div>
//                       </div>
//                     </div>
//                   </blockquote>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import PP from '@/assets/pp.png'


const testimonials = [
  {
    id: 1,
    quote: "The ultimate football social media experience any fan could be part of!",
    author: "Josh Prescott",
    role: "U14 Coach",
    image: PP,
  },
  // Add more testimonials here
]

export function CTASection() {
  return (
    <section className="bg-[#641C3C] text-white px-4 md:px-6 py-8 md:py-12 lg:py-16 w-full">
      {/* Responsive Layout */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left lg:max-w-[50%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Ready to get started?
          </h2>
          <p className="text-white/80 leading-relaxed text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Imperdiet faucibus et in sed nibh scelerisque odio. Vel volutpat diam posuere mauris tristique dui amet.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button
              size="lg"
              className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full px-8 py-2"
            >
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:text-black hover:bg-white font-semibold rounded-full px-8 py-2"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full max-w-lg">
          <Carousel className="relative">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="p-4">
                  <blockquote className="space-y-6 text-center">
                    <p className="text-sm md:text-2xl font-medium leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-white/80">{testimonial.role}</div>
                      </div>
                    </div>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
        
          </Carousel>
        </div>
      </div>
    </section>
  )
}

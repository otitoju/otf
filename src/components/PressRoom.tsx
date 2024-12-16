// import Image from "next/image"
// import Link from "next/link"
// import { ArrowUpRight } from 'lucide-react'
// import Press1 from '@/assets/press1.png';
// import Press2 from '@/assets/press2.png';
// import Press3 from '@/assets/press3.png';
// import Press4 from '@/assets/press4.png';
// import Press5 from '@/assets/press5.png';
// import Press6 from '@/assets/press6.png';

// interface Article {
//     id: number
//     title: string
//     description: string
//     author: string
//     date: string
//     image: any
//     slug: string
// }

// const articles: Article[] = [
//     {
//         id: 1,
//         title: "Nurturing young talents",
//         description: "Assist talented young uns get into the beautiful game and actually carve a career path",
//         author: "Phoenix Baker",
//         date: "19 Jan 2024",
//         image: Press1,
//         slug: "nurturing-young-talents"
//     },
//     {
//         id: 2,
//         title: "The game of the amateur",
//         description: "Beyond the glamour of pro football, there's a hugely untapped world in the game of the amateur",
//         author: "Lana Steiner",
//         date: "18 Jan 2024",
//         image: Press2,
//         slug: "game-of-amateur"
//     },
//     {
//         id: 3,
//         title: "From Africa with love",
//         description: "Grassroots but let's take it cross border, football shouldn't have boundaries",
//         author: "Alec Whitten",
//         date: "17 Jan 2024",
//         image: Press3,
//         slug: "from-africa-with-love"
//     },
//     {
//         id: 4,
//         title: "Is there a Lamine in you?",
//         description: "Help kids figure out if they're just better than they're peers or the next superstar",
//         author: "Demi Wilkinson",
//         date: "16 Jan 2024",
//         image: Press4,
//         slug: "is-there-a-lamine-in-you"
//     },
//     {
//         id: 5,
//         title: "Football more than a sport",
//         description: "Ever hear one say \"what would life be without weekend football?\" You're not alone mate",
//         author: "Candice Wu",
//         date: "15 Jan 2024",
//         image: Press5,
//         slug: "football-more-than-sport"
//     },
//     {
//         id: 6,
//         title: "Get kids to love the good ol' goalies like the old days",
//         description: "Gone are the days when kids aspired to be Schmeichels and Van der Sars, is there hope for a seemingly withering profession?",
//         author: "Natali Craig",
//         date: "14 Jan 2024",
//         image: Press6,
//         slug: "love-goalkeepers"
//     }
// ]

// export function PressRoom() {
//     return (
//         <section className="container py-6">
//             <h2 className="text-2xl font-bold tracking-tight mb-12">
//                 Press room
//             </h2>
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 {articles.map((article) => (
//                     <article key={article.id} className="group">
//                         <Link href={`/press/${article.slug}`}>
//                             <div className="space-y-4">
//                                 <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
//                                     <Image
//                                         src={article.image}
//                                         alt={article.title}
//                                         fill
//                                         className="object-cover transition-transform group-hover:scale-105"
//                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <div className="flex items-center gap-2 text-sm text-pink-500 text-sm">
//                                         <span>{article.author}</span>
//                                         <span>•</span>
//                                         <time dateTime={article.date.replace(/\s/g, '-')}>
//                                             {article.date}
//                                         </time>
//                                     </div>
//                                     <div className="space-y-1">
//                                         <div className="flex items-center justify-between">
//                                             <h3 className="font-semibold text-xl group-hover:text-pink-500 max-w-[70%] ">
//                                                 {article.title}
//                                             </h3>
//                                             <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#06C08C]" />
//                                         </div>

//                                         <p className="text-muted-foreground line-clamp-2 text-sm">
//                                             {article.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     )
// }



import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Press1 from "@/assets/press1.png";
import Press2 from "@/assets/press2.png";
import Press3 from "@/assets/press3.png";
import Press4 from "@/assets/press4.png";
import Press5 from "@/assets/press5.png";
import Press6 from "@/assets/press6.png";


const articles = [
  {
    id: 1,
    title: "Nurturing young talents",
    description:
      "Assist talented young uns get into the beautiful game and actually carve a career path",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    image: Press1,
    slug: "nurturing-young-talents",
  },
  {
    id: 2,
    title: "The game of the amateur",
    description:
      "Beyond the glamour of pro football, there's a hugely untapped world in the game of the amateur",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    image: Press2,
    slug: "game-of-amateur",
  },
  {
    id: 3,
    title: "From Africa with love",
    description:
      "Grassroots but let's take it cross border, football shouldn't have boundaries",
    author: "Alec Whitten",
    date: "17 Jan 2024",
    image: Press3,
    slug: "from-africa-with-love",
  },
  {
    id: 4,
    title: "Is there a Lamine in you?",
    description:
      "Help kids figure out if they're just better than they're peers or the next superstar",
    author: "Demi Wilkinson",
    date: "16 Jan 2024",
    image: Press4,
    slug: "is-there-a-lamine-in-you",
  },
  {
    id: 5,
    title: "Football more than a sport",
    description:
      'Ever hear one say "what would life be without weekend football?" You\'re not alone mate',
    author: "Candice Wu",
    date: "15 Jan 2024",
    image: Press5,
    slug: "football-more-than-sport",
  },
  {
    id: 6,
    title: "Get kids to love the good ol&#39; goalies like the old days",
    description:
      "Gone are the days when kids aspired to be Schmeichels and Van der Sars, is there hope for a seemingly withering profession?",
    author: "Natali Craig",
    date: "14 Jan 2024",
    image: Press6,
    slug: "love-goalkeepers",
  },
];

export function PressRoom() {
  return (
    <section className="container px-4 md:px-6 py-6 lg:py-12 mx-auto">
      <h2 className="text-2xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6 text-left">
        Press Room
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <Link href={`/press/${article.slug}`}>
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* Text Content */}
                <div className="space-y-2 px-2 md:px-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-pink-500">
                    <span>{article.author}</span>
                    <span>•</span>
                    <time dateTime={article.date.replace(/\s/g, "-")}>
                      {article.date}
                    </time>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg md:text-xl group-hover:text-pink-500 max-w-[80%] leading-tight">
                        {article.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#06C08C]" />
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm md:text-base leading-snug">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

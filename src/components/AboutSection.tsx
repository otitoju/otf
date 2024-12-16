// import Image from "next/image";
// import Footballer from "@/assets/footballer.png";
// import { Button } from "./ui/button";

// export default function AboutSection() {
//     return (
//         <section className="container mx-auto px-6 ">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 {/* Left Content */}
//                 <div>
//                     {/* Heading */}
//                     <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                         What is <span className="text-pink-600">One Touch Football?</span>
//                     </h2>
//                     {/* Description */}
//                     <p className="text-gray-700 mb-6 text-sm">
//                         The Home of Grassroots Football & Social Media, One Touch Football
//                         is a football-first, social media app specifically developed for the
//                         grassroots community. Whether you're a player, a team, or simply a
//                         passionate fan, this inclusive and accessible app offers a wide
//                         range of features designed to connect you with your football
//                         community.
//                     </p>

//                     {/* Features List */}
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         <div className="flex items-center space-x-2">
//                             <span className="text-green-500 text-sm">⚽</span>
//                             <p className="text-gray-700 text-sm">Engaging</p>
//                         </div>
//                         <div className="flex items-center space-x-2 text-sm">
//                             <span className="text-green-500 ">⚽</span>
//                             <p className="text-gray-700">Diversity is a must!</p>
//                         </div>
//                         <div className="flex items-center space-x-2 text-sm">
//                             <span className="text-green-500">⚽</span>
//                             <p className="text-gray-700">Inclusivity focused</p>
//                         </div>
//                         <div className="flex items-center space-x-2 text-sm">
//                             <span className="text-green-500">⚽</span>
//                             <p className="text-gray-700">Banter makes the sport go wild</p>
//                         </div>
//                         <div className="flex items-center space-x-2 text-sm">
//                             <span className="text-green-500">⚽</span>
//                             <p className="text-gray-700">Focus on grassroots</p>
//                         </div>
//                         <div className="flex items-center space-x-2 text-sm">
//                             <span className="text-green-500">⚽</span>
//                             <p className="text-gray-700">Free access!</p>
//                         </div>
//                     </div>

//                     {/* Button */}
//                     {/* <button className="inline-flex items-center justify-center px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full hover:bg-pink-700 transition">
//             Join here →
//           </button> */}

//                     <Button
//                         variant="outline"
//                         size="lg"
//                         className="rounded-full border-2 border-blackrt of "
//                     >
//                         Join here →
//                         <span className="sr-only">Join One Touch Football</span>
//                     </Button>
//                 </div>

//                 {/* Right Image */}
//                 <div className="flex justify-center">
//                     <Image
//                         src={Footballer} // Replace with your image path
//                         alt="Football Player"
//                         className="rounded-lg h-128 w-128 object-cover"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }


import Image from "next/image";
import Footballer from "@/assets/footballer.png";
import { Button } from "./ui/button";

// Features Data
const FEATURES = [
    "Engaging",
    "Diversity is a must!",
    "Inclusivity focused",
    "Banter makes the sport go wild",
    "Focus on grassroots",
    "Free access!",
];

export default function AboutSection() {
    return (
        <section className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What is <span className="text-pink-600">One Touch Football?</span>
                    </h2>

                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                        The Home of Grassroots Football & Social Media, One Touch Football
                        is a football-first, social media app specifically developed for the
                        grassroots community. Whether you&apos;re a player, a team, or simply a
                        passionate fan, this inclusive and accessible app offers a wide
                        range of features designed to connect you with your football
                        community.
                    </p>

                    {/* Features List */}
                    <FeatureList />

                    {/* CTA Button */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-2 border-black hover:bg-pink-600 hover:text-white transition-all"
                    >
                        Join here →
                        <span className="sr-only">Join One Touch Football</span>
                    </Button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <Image
                        src={Footballer}
                        alt="Football Player"
                        className="rounded-lg h-auto w-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

// Feature List Component
function FeatureList() {
    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">⚽</span>
                    <p className="text-gray-700">{feature}</p>
                </div>
            ))}
        </div>
    );
}

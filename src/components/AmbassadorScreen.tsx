import React from 'react'
import Ambassador1 from '@/assets/ambassador1.png';
import Ambassador2 from '@/assets/ambassador2.png';
import Image from 'next/image';



const ambassadors = [
    {
        id: 1,
        name: "Andre Smith",
        role: "CEO",
        image: Ambassador1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        name: "Nicholas Smith",
        role: "CFO",
        image: Ambassador2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "COO",
        image: Ambassador1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]

export default function AmbassadorScreen() {
    return (
        <div className="bg-[#FAF9F6] py-12 px-4">
            <div className="container mx-auto">
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
                    Meet the Ambassadors
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        ambassadors.map((ambassador) => (
                            <div key={ambassador.id} className="flex bg-white rounded-lg overflow-hidden">
                                <Image
                                    src={ambassador.image}
                                    alt="Ambassador"
                                    className="w-1/3 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm mb-4">
                                        {ambassador.description}
                                    </p>
                                    <h3 className="font-bold text-gray-900">{ambassador.name}</h3>
                                    <p className="text-pink-600 text-sm font-semibold">{ambassador.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

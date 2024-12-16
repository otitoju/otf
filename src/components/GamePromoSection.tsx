import Image from "next/image";
import Logo from '@/assets/logo.png'
import SmartPhone from '@/assets/smartphone.png'
import Playstore from '@/assets/playstore.png'
import Appstore from '@/assets/apple-store.png'


export default function GamePromoSection() {
    return (
        <div className="py-6 px-4 md:py-24">
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-pink-600">Level</span> Up Your Game!
                </h1>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-sm">
                    From community leagues to aspiring pros, we&apos;re here to support every
                    step of your football journey. Connect with scouts, find tournaments,
                    track your progress, and be part of a network that celebrates the
                    spirit of grassroots football.
                </p>
            </div>

            <section className="bg-white rounded-md ">

                <div className=" flex flex-col md:flex-row justify-between">
                    {/* Left Side Content */}
                    <div className="flex flex-col justify-center space-y-4 p-8">

                        {/* Logo & App Links */}
                        <div className="flex items-center space-x-2 mb-5">
                            <Image
                                src={Logo}
                                alt="One Touch Football Logo"
                                width={60}
                                height={60}
                                className="h-12 w-12"
                            />
                            <span className="font-semibold text-pink-600 text-sm">
                                ONE TOUCH <br /> FOOTBALL
                            </span>
                        </div>

                        {/* Download Buttons */}
                        <DownloadAppSection />

                        
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center">
                        <Image
                            src={SmartPhone}
                            alt="Phone Mockup"
                            
                            className="rounded-r-md shadow-lg h-full w-full"
                        />
                    </div>
                </div>
            </section>
        </div>

    );
}


function DownloadAppSection() {
    return (
      <div className="space-y-4">
        {/* Heading */}
        <h3 className="text-sm font-semibold text-gray-800">Download the app</h3>
  
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
  


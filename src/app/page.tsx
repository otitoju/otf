import AboutSection from "@/components/AboutSection";
import AmbassadorScreen from "@/components/AmbassadorScreen";
import { CTASection } from "@/components/cta_section";
import { DownloadInfoSection } from "@/components/DownloadInfoSection";
import { SiteFooter } from "@/components/Footer";
import GamePromoSection from "@/components/GamePromoSection";
import { SiteHeader } from "@/components/header";
import { LockerRoom } from "@/components/LockerRoom";
import { PressRoom } from "@/components/PressRoom";
import { WaitlistSection } from "@/components/Waitlist";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F6]  font-[var(--font-geist-sans)]">
      <SiteHeader />
      <GamePromoSection />
      <div className="w-full bg-[#FAF9F6]">
        <AboutSection />
      </div>
      <AmbassadorScreen />
      <PressRoom />
      <DownloadInfoSection />
      <LockerRoom />
      <WaitlistSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

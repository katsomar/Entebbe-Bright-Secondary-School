import HeroSection from "@/components/home/HeroSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import StatCardsSection from "@/components/home/StatCardsSection";
import LifeAtCampusSection from "@/components/home/LifeAtCampusSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsSection from "@/components/home/NewsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <StatCardsSection />
      <LifeAtCampusSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
}

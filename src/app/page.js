import HeroScroll from "@/components/home/HeroScroll";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import LeadFormSection from "@/components/home/LeadFormSection";

export default function HomePage() {
  return (
    <>
      <HeroScroll />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <Reviews />
      <LeadFormSection />
    </>
  );
}
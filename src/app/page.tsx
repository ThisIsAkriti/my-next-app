import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen ">
    <HeroSection/>
    <Featured/>
    <WhyChooseUs/>
    <Testimonials/>
    </main>
  );
}

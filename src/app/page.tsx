import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import Upcoming from "@/components/Upcoming";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen ">
    <HeroSection/>
    <Featured/>
    <WhyChooseUs/>
    <Testimonials/>
    <Upcoming/>
    </main>
  );
}

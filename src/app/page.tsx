import Featured from "@/components/Featured";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Upcoming from "@/components/Upcoming";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black ">
    <HeroSection/>
    <Featured/>
    <WhyChooseUs/>
    <Testimonials/>
    <Upcoming/>
    <Instructors/>
    <FooterSection/>
    </main>
  );
}

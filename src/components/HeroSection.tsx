import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className=" text-3xl text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">

      <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="gray"
      />

      <h1 className=" mt-20 md:mt-0 lg:text-6xl md:text-5xl   font-bold ">Unlock Your Fitness Potential</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-ato text-center">FITPASS is your one-stop destination for complete wellness. Whether you're a fitness enthusiast, a beginner, or someone seeking a healthier lifestyle, FITPASS offers a comprehensive suite of services to cater to your unique needs.</p>
      <div className="mt-8">
        <Link href={'/data'}>
          <Button 
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"> Explore </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection

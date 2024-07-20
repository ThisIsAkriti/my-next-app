import Link from 'next/link'

import { HoverEffect } from "./ui/card-hover-effect";


const upcomingMockData = [
    {
      title: "Fitness Tracker",
      description: "Track your daily workouts, set goals, and monitor your progress.",
      slug: "fitness-tracker"
    },
    {
      title: "Protein Shake Recipes",
      description: "Discover delicious protein shake recipes for post-workout recovery.",
      slug: "protein-shake-recipes"
    },
    {
      title: "Yoga Poses",
      description: "Learn essential yoga poses for flexibility, strength, and relaxation.",
      slug: "yoga-poses"
    },
    {
      title: "HIIT Workouts",
      description: "High-Intensity Interval Training (HIIT) routines for maximum calorie burn.",
      slug: "hiit-workouts"
    },
    {
      title: "Healthy Snack Ideas",
      description: "Quick and nutritious snack options to fuel your workouts.",
      slug: "healthy-snack-ideas"
    }
];

function Upcoming(){

  return (
    <div className='md:p-12 p-4 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Fitness Journey with us</p>
        </div>

        <div className='mt-10'>
            <HoverEffect 
            items = {upcomingMockData.map(webinar => (
              {
                title : webinar.title,
                description: webinar.description,
                link:'/'
              }
            ))}/>
        </div>
        
        <div className='text-center md:mt-20'>
        <Link href={"/data"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
        View All Courses</Link>
      </div>
      </div>
    </div>
  )
}

export default Upcoming

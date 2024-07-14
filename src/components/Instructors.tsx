"use client"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const instructorData = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Personal Trainer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      designation: 'Strength Coach',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Emily Brown',
      designation: 'Nutritionist',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Alex Ramirez',
      designation: 'CrossFit Trainer',
      image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

const Instructors = () => {
    return(
        <div className="relative h-[40rem] overflow-hidden flex items center justify-center">
            <WavyBackground className="flex flex-col w-full max-w-7xl mx-auto items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">Meet Our Instructor</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your fitness journey incredible</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructorData}/>
                </div>
            </WavyBackground>
        </div>
    )
}
export default Instructors;
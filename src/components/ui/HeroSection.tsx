import { div } from "motion/react-client";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

function HeroSection() {
      

      return (
           <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center mx-auto py-10">
            <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f1449b] to-[#9f76c9]">
                  Master the art of music
            </h1>
            <Spotlight
            className="-top-40 left-20 md:-top-20 md:left-60"
            fill="blue"
             />
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover your passion for music with our comprehensive courses. 
                  Whether you're a beginner or an experienced musician, we have something for everyone.
                  Join us and unlock your musical potential today!
            </p>    
            <div className="mt-4">
                  <Link href={"/courses"}>
                  Explore courses
                  </Link>
            </div>
            </div>
           </div>
      )
}

export default HeroSection;
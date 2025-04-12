
import  HeroSection  from "@/components/ui/HeroSection";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid--white/[0.02]">
      <h1 className="text-2xl text-center">
        Music 
      </h1>
      <HeroSection />
    </main>
  );
}

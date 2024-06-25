// import Image from "next/image"; // Remove this if not used

import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <HeroSection />

    </main>
  );
}

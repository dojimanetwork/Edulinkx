
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Ambassadors from "@/components/sections/Ambassadors";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Stats from "@/components/sections/Stats";
import ThreeSteps from "@/components/sections/ThreeSteps";
import YouCan from "@/components/sections/YouCan";

export default function Home() {
  return (
    <>
   
    <Navbar />
    <Hero />
    <LogoCloud />
    <Stats />
    <YouCan />
    <Features />
    <Ambassadors />

    <ThreeSteps />
    <Footer />
    </>
  );
}

import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Build from "@/components/Build";
import SelfImprovement from "@/components/SelfImprovement";
import AboutOthers from "@/components/AboutOthers";
import TakeTest from "@/components/TakeTest";
import WorkWithUs from "@/components/WorkWithUs";
import Vacancies from "@/components/Vacancies";
import Download from "@/components/Download";
import SubFeature from "@/components/SubFeature";

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Features/>
        <Build/>
        <SelfImprovement/>
        <SubFeature
            sectionOne={'Now having your own emotions under control might be holding you back'}
            sectionTwo={'Additionally, not understanding those of others stops you from being parent, friend you can be.'}
        />
        <AboutOthers/>
        <TakeTest/>
        <WorkWithUs/>
        <Vacancies/>
        <Download/>
    </main>
  )
}

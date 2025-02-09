import { Image } from "@react-three/drei";
import { HeroSection } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Section } from "./sections/Section";
import { AboutSection } from "./sections/About";
import { Timeline } from "./sections/Timeline";


export const Interface = () =>{
    return (
        <div className="flex flex-col items-center w-screen ">
        <HeroSection/>
        <AboutSection/>
        <Timeline/>
        <Projects/>
        
        <Section>
            <h1>Contact</h1>
        </Section>
        </div>
    )
};


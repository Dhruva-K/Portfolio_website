import { Section } from "./Section";
import { motion } from "framer-motion";

export const HeroSection = ()=>{
    return(
        <Section>
        <h1>
        <motion.span className="text-2xl font-light p-1 text-white "
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        >
             Hi, I'm 
        </motion.span>
        <br/>
        <span className="text-12xl  text-white opacity-80 font-Anton ">
        Dhruva 
        </span>
        <br/>
         <span className="text-12xl text-indigo-400 opacity-60 font-Anton leading-[0.5] ">
         Khanwelkar
        </span>
        </h1>
    
        {/* <p className="text-lg text-pink-400 mt-4 ">
            I am a Software Engineer at Barclays
        </p> */}
        <button className={`bg-indigo-400 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-16 hover:bg-indigo-500`}>
            Contact Me
        </button>
         </Section>

    );
 
};
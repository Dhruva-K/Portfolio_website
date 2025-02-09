import { Section } from "./Section"
import { motion } from "framer-motion"

export const AboutSection = () =>{
    return(
        <motion.section className={`
            h-screen w-screen p-24 max-w-screen-2xl mx-auto flex flex-row items-start justify-center
            `}
            initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.6,
            },
          }}>
  
          <div className="flex-1 p-4 h-4/5 max-w-full rounded-xl items-start justify-center bg-indigo-900 bg-opacity-30 border-[0.25px] border-indigo-700 border-opacity-50 transform-gpu translate-y-0 hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out ">
          <h1 className="text-2xl text-white opacity-100">About Me</h1>
          <br/>
            <p className="text-lg text-white">
            Secret scanning automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.
            </p>

          </div>
          <div className="flex-1 p-4 items-start justify-center">

          </div>
            </motion.section>
       
    )
}
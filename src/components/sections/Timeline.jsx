import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion"; 
import { experience } from "../../constants";
import { Section } from "./Section"

export const Timeline = () =>{
    return(
        <motion.section className={`
            h-[200vh] w-screen p-24 max-w-screen-2xl mx-auto flex flex-col items-center justify-center
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
          <div className="flex flex-col h-full w-full  items-center">
                <h1 className="text-5xl text-white font-bold text-center">Experience</h1>
                <br/>
                <VerticalTimeline lineColor="#926AF0" >
                {
                    experience.map((item,i)=>{
                        return(
                            <VerticalTimelineElement
                                key = {item.id}
                                className="vertical-timeline-element--work"
                                contentStyle= {i%2==0?{ background: '#3F1A97', color: '#fff' }:{color: '#fff'}}
                                contentArrowStyle={{ borderRight: '7px solid  #3F1A97' }}
                                date={item.date}
                                // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                // icon={<WorkIcon />}
                            >
                                <h1 className={i%2==0?`text-white text-2xl`:`text-black text-2xl`}>{item.title}</h1>
                                <h3 className={i%2==0?`text-white text-xl`:`text-black text-xl`}>{item.company}</h3>
                                <p className={i%2==0?`text-white text-xl`:`text-black text-base`}>{item.skills}</p>
                                <p className={i%2==0?`text-white text-xl`:`text-black text-xl`}>{item.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                };
                </VerticalTimeline>
          </div>
        
    </motion.section>
    )
    

}
import StarBackground from "../Components/StarBackground.tsx";
import SkillCard from "../Components/SkillCard.tsx";

import { useEffect, useState } from "react";



const Skills = () => {
    const [loaded, setloaded] = useState(false);
    
      useEffect(() => {
        setloaded(true);
      }, []);
    
     return (
        <div className ="h-screen w-full bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] overflow-hidden absolute z-[0] " style={{
            animation: "gradient-bg 7s ease infinite",
            backgroundSize: "200% 200%",
        }}>
            <div className="text-[#CAC4CE] text-center font-bold font-montserrat transition-opacity duration-500 ease-in-out text-3xl mt-[5vh]">
                Skills
            </div>
            <p className="absolute top-[20%] left-[15%]">
                <SkillCard skill="JavaScript" logo="/logos/js.png" />                
            </p>
            <p className="absolute top-[50%] left-[15%] ">
                <SkillCard skill="React" logo="/logos/programming.png" />
            </p>
            <p className="absolute top-[80%] left-[15%]">
                <SkillCard skill="Docker" logo="/assets/docker.png" />
            </p>
            <div className={`absolute top-0 left-0 w-full h-full z-[-1] transition-opacity duration-5000 ease-in-out ${loaded ? "opacity-100" : "opacity-0"}`}>
                <StarBackground />
                 
            </div>
           
                
            
                   
        </div>
    );
}
export default Skills;
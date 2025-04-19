import React from "react";
import { motion } from "framer-motion";
import StarsBackground from "./StarBackground";

interface SkillProps {
    skill: string;
    logo: string;
}

const SkillCard: React.FC<SkillProps> = ({ skill, logo }) => {
  return (
    <div>
    <motion.div 
      whileHover={{ scale: 1.1, opacity: 1 }} 
      whileTap={{ scale: 0.95 }} 
      className="flex flex-col items-center p-4 bg-[#242038] opacity-50 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300
      absolute w-[250px] h-[150px] 
      ">
      <img src={logo} alt={skill} className="w-15 h-16 object-contain" />
      <p className="mt-2 text-white text-2xl">{skill}</p>
    </motion.div>
  
    </div>
    
  );
};

export default SkillCard;
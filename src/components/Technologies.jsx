import React from "react";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion"


const iconVariant=(duration)=>({
initial:{y:-10},
animate:{
  y:[10,-20],
  transition:{
    duration:duration,
    ease:'linear',
    repeat: Infinity,
    repeatTpye:'reverse',

  }

}
})
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h2
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}

       className="my20 text-center text-4xl my-10 "> Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}

       className="flex flex-wrap item-center justify-center gap-4  my-20 ">
        <motion.div 
        variants={iconVariant(2.4)} 
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <IoLogoNodejs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
         variants={iconVariant(4)} 
         initial='initial'
         animate='animate'
       className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
         variants={iconVariant(6)} 
         initial='initial'
         animate='animate'
       
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <LiaNode className="text-7xl text-white" />
        </motion.div>

        <motion.div 
         variants={iconVariant(7)} 
         initial='initial'
         animate='animate'
         
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
         variants={iconVariant(2)} 
         initial='initial'
         animate='animate'
        
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;

import React from 'react'
import about from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className=' my-20 text-center text-4xl'>About <span className='opacity-65' > Me</span></h2>
        <div className='flex flex-wrap' >
            <div className='w-full lg:w-1/2 p-8'>  
            <div className='flex item-center justify-center' >
                <motion.img  
                 initial={{x:-100,opacity:0}}
          // animate={{x:0, opacity:1}}
          transiion={{duration:1, delay:1}}
          whileInView={{opacity:1,x:0}}
                
                 className='rounded-2xl max-w-96'src={about} alt="About" />
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start ' ></div>
            <motion.p   
          initial={{x:100,opacity:0}}
          // animate={{x:0, opacity:1}}
          transiion={{duration:1, delay:1}}
          whileInView={{opacity:1,x:0}}
        className='my-10 max-w-xl py-6'> { ABOUT_TEXT}</motion.p>
            </div>
        </div>
    </div>
  )
}

export default About
import { HERO_CONTENT } from "../constants";
import photo from '../assets/about2.jpg';
import { delay, motion } from "framer-motion"

const container= (delay)=>({
hidden:{x:-100 ,opacity:0},
visible:{ x:0, opacity:1},
transiion:{duration:2, delay:delay},
whileInView:{opacity:1, x:0}
})


function Hero() {

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start">
            <motion.h1 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:0.5}} 
             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Zunaira Fatima
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p 
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
            className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-max-96 g:w-1/2 lg:p-8 px-30">
        <div className="justify flex-center">
        <motion.img 
        initial={{x:-100,opacity:0}}
      whileInView={{opacity:1,x:0}}
        transiion={{duration:0.5}}
      className="max-h-96 max-w-96 mx-10 rounded-1xl" src={photo} alt="photo" />
        </div>
       
        </div>

      </div>
    </div>
  );
}

export default Hero;

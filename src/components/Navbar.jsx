import React from 'react'
import logo from '../assets/LOGO1.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function NavBar() {
  return (
   <nav className='  mb-20 flex item-center justify-between  py-6'>
     <div className='flex flex-shrink-0 items-center'>
     <img className='mx-2 w-10'src={logo} alt="logo" />
     </div>
     
     <div className='m-8 flex items-center justify-center gap-4 text-2xls'>
      <a href="https://www.linkedin.com/in/zunaira-fatima-684aa5286/">   <FaLinkedin /> </a>
      <a href="https://github.com/"> <FaGithub /> </a>
      
  
     <FaInstagramSquare />


     </div>
   </nav> 
  
  )
}

export default NavBar
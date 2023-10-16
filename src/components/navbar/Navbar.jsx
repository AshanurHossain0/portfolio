import React, { useState } from 'react'
import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {


  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper">
        <motion.span
         initial={{opacity:0,scale:0.5}} 
         animate={{opacity:1,scale:1}}
         transition={{duration:0.5}}
         className="author"
         >Ashanur Hossain</motion.span>
        <div className="social">
          <a><img href="#" src="./facebook.png" alt="" /></a>
          <a><img href="#" src="./instagram.png" alt="" /></a>
          <a><img href="#" src="./youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
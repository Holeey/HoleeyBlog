import * as React from "react"
import { Fragment } from "react"
import './customlogo.css'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from "react-router-dom"

const SvgComponent = () =>  {

   const pathVariants = {
      initial: {
        pathLength: 0
      },
      animate: {
        pathLength: 1,
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
        }
      }
    }
  return (
    <Fragment>
      <NavLink to = '/'>
        <div className="navbar_svg_wrapper">
        <AnimatePresence mode="wait"> 
        <motion.svg className="layer"
          variants={pathVariants}
          initial= 'initial'
          animate= 'animate'
      
          viewBox="69 100 120 100" 
        
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <motion.path
            variants={pathVariants}
            initial= 'initial'
            animate= 'animate'
            fill="none"
            stroke="#fff"
            strokeWidth={5}
            d="M100 99.55v99M101 98.55l23 28M100 197.55l20-11M121 125.55v22M121 148.55l19 2M121 168.55l-1 18M119 167.55l20 3M157 100.55v99M139 128.55v22M137 168.55v17M137 127.55l19-26M136 181.55l19 16"
        /> 
        <motion.ellipse 
          variants={pathVariants}
          initial= 'initial'
          animate= 'animate'
          cx={130} cy={147.55} fill="none" rx={52} ry={9} stroke="#ffff"  strokeWidth={3} />
         </motion.svg> 
         </AnimatePresence>
         </div>
      </NavLink> 
  </Fragment> 
   
  
 )
}

  
 export default SvgComponent;


 
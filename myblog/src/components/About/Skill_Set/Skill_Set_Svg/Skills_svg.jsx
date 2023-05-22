import React, { Fragment } from 'react'
import './skills-svg.css'
import { motion, AnimatePresence} from 'framer-motion';

const SkillsSvg = ({toggle_svg_background}) => {

  return (
    <Fragment>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="skills__svg" 
    viewBox= '0 0 222 182'
   
  >    

        <path className="skills__svg-line" d="M55.2466 1H165.749" 
        stroke="#ECECEC" stroke-width="2" ></path>

        <path className="skills__svg-line" d="M221 91L193.374 46L165.749 1" stroke="#ECECEC" 
        stroke-width="2" ></path>

        <path className="skills__svg-line" d="M221 91L165.749 181" stroke="#ECECEC" 
        stroke-width="2" ></path>

        <path className="skills__svg-line" d="M165.749 181H55.2466" stroke="#ECECEC" 
        stroke-width="2" ></path>

        <path className="skills__svg-line" d="M56.2511 181L1 91" stroke="#ECECEC" 
        stroke-width="2" ></path>

        <path className="skills__svg-line" d="M1 91L56.2511 1" stroke="#ECECEC" 
        stroke-width="2" ></path>
       
      {toggle_svg_background && <AnimatePresence mode='sync'><motion.path
        initial= {{opacity: 0}}
        animate= {{ opacity: 0.2}}
        transition={{  type: "easeInOut", duration: 2 }}
        fill={'#cab319'}
        d="m2 94.36 54.94-89.2h109.87l54.94 89.2-54.94 89.2H56.94L2 94.36z"
        className="skills__svg-background"
      /></AnimatePresence>} 

  </svg>
    </Fragment>
  )
}

export default SkillsSvg
import React, {Fragment} from 'react'
import './high_quality_svg.css'
import { motion, AnimatePresence } from 'framer-motion'


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
  },
  hidden : { opacity: 0},
  visible: { opacity: 1, transition: { delay: 1.5}}
}

export const HighQualitySvg = ({ high__Quaity__FormShadowColor, high__Quaity__Svg_icon }) => {
  return (
    <Fragment>
       
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 300 250'
      className="high-quality__benefits__item-form"
    >
        <path
          fill="#3F4045"
          d="m121-8 120 62.5v125L121 242 1 179.5v-125L121-8z"
        />     
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 250 250'
      className="high-quality__benefits__item-form-shadow"
      
    >
        <path
          style={{fill: high__Quaity__FormShadowColor}}
          d="m120 0 120 62.5v125L120 250 0 187.5v-125L120 0z"
        />
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 100 100'
      className="high-quality__benefits__icon-holder"
     
    >     
        <g fill='#CA913B'>
          <path
            d="m30 0 30 17.5v35L30 70 0 52.5v-35L30 0z"
          />
          <path
            stroke="#fff"
            strokeWidth={2}
            d="M1 19.07 30 2.16l29 16.91v33.86L30 69.84 1 52.93V19.07z"
          />
        </g>
     
    </svg>
  
    <svg
    xmlns="http://www.w3.org/2000/svg"

    fill="none"
    className="high-quality__benefits__icon-svg"
  >
    <path
      fill="#111"
      d="M46.244 32H2.298v-2.125h43.946V32ZM2.626 28.136h7.325V10.881l-7.325 5.277v11.978ZM44.33 6.277l-6.548 4.658v17.201h7.324V7.381l-.776-1.104ZM28.993 16.669v11.467h7.324V11.457l-7.303 5.197-.02.015M11.415 10.352v17.784h7.324V5.068l-7.324 5.284ZM20.204 6.138v21.998h7.324V16.85l-7.324-10.71Z"
    />
    <AnimatePresence mode='sync'>
      <motion.path
      variants={pathVariants}
      animate= {high__Quaity__Svg_icon ? 'animate' : 'initial'}
      stroke="#000"
      d="M2 13 19 1l8 10 11.5-7.5"
    
    />
    <motion.path
      variants={pathVariants}
      animate={high__Quaity__Svg_icon ? 'visible' : 'hidden'}
      fill="#000"
      d="M37.738 2.966 37 1.915 42.086 1l-2.54 4.536-1.808-2.57Z"

    />
    </AnimatePresence>
 
  </svg>
  
      </Fragment>
  )
}

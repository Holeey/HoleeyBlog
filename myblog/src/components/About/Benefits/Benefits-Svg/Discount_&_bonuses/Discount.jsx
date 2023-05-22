import React, {Fragment}  from 'react'
import './discount.css'
import { motion, AnimatePresence } from 'framer-motion'


const PathVariants = {
  initial: { pathLength: 0},
  animate_1: { pathLength: 1, transition: {type: 'easeIn', duration: 0.5}},
  animate_2: {pathLength: 1, transition: { type: ' easeOut', duration: 0.5 }}
}


const Discount = ({ discount__FormShadowColor , discount__Svg_icon }) => {
  return (
    <Fragment>
       
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 300 250'
      className="discount__benefits__item-form"
     
    >
      
        <path
          fill="#3F4045"
          d="m121-8 120 62.5v125L121 242 1 179.5v-125L121-8z"
        />
     
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 250 250'
      className="discount__benefits__item-form-shadow"
      
    >
        <path
          style={{fill:  discount__FormShadowColor}}
          d="m120 0 120 62.5v125L120 250 0 187.5v-125L120 0z"
        />
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 100 100'
      className="discount__benefits__icon-holder"
     
    >     
        <g fill='#CA931B'>
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
    className="discount__benefits__icon-svg"
  
  >
    <path
      fill="#111"
      d="M26.001 26.846c0-.754-.307-1.343-.92-1.764-.616-.421-1.472-.81-2.57-1.167v5.363c2.326-.068 3.49-.878 3.49-2.432Zm-7.999-10.822c0 .754.258 1.326.775 1.715.515.389 1.3.738 2.352 1.048v-5.395c-2.084.134-3.127 1.012-3.127 2.632Zm8.364-1.402c-1.19-.599-2.57-1.062-3.855-1.195v5.76l.824.2c1.141.31 2.177.645 3.11.999 1.668.636 3.1 1.62 3.868 3.248.721 1.53.73 4.167-.116 5.876-1.366 2.765-4.336 3.737-7.389 3.863v2.663c0 .554-.442 1-.987 1a.993.993 0 0 1-.988-1v-2.695a17.16 17.16 0 0 1-6.661-1.896c-2.582-1.352-.442-5.135 2.03-3.83 1.379.73 3.245 1.408 4.927 1.595v-5.727c-.66-.146-2.703-.728-4.098-1.35-2.753-1.224-3.702-3.007-3.702-5.376 0-3.236 1.75-5.617 4.543-6.694a10.692 10.692 0 0 1 2.961-.667V7c0-.554.443-1 .988-1 .545 0 .987.446.987 1v2.364c1.722.132 3.48.55 5.35 1.496a2.111 2.111 0 0 1 .899 2.882c-.523.973-1.712 1.374-2.691.88"
    />
    <AnimatePresence mode='sync'>
    <motion.path
      variants={PathVariants}
      animate={discount__Svg_icon ? "animate_1" : "initial" }
      stroke="#000"
      strokeWidth={2}
      d="M40.5 28.5C38 36 31.5 41 21 41S1 32.5 1 21"
 
    />
    <motion.path
          variants={PathVariants}
          animate={discount__Svg_icon ? "animate_2" : "initial" }
      stroke="#000"
      strokeWidth={2}
      d="M1 21C1 9.954 9.954 1 21 1s20 8.954 20 20"
    />
    </AnimatePresence>
  </svg>
      </Fragment>
  )
}

export default Discount
import React, { Fragment } from 'react'
import './full_control_svg.css'

const FullControlSvg= ({ full_control__formShadowColor, full_control__Svg_icon}) => {
  

  return (
    <Fragment>
       
  <svg   
    xmlns="http://www.w3.org/2000/svg"
    viewBox='0 0 300 250'
    className="full-control__benefits__item-form"
  >
      <path    
        fill="#3F4045"
        d="m121-8 120 62.5v125L121 242 1 179.5v-125L121-8z"
      />
  </svg>

  <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox='0 0 250 250'
    className="full-control__benefits__item-form-shadow"
  >
      <path 
        style={{fill: full_control__formShadowColor}}
        d="m120 0 120 62.5v125L120 250 0 187.5v-125L120 0z"
      />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox='0 0 100 100'
    className="full-control__benefits__icon-holder"
   
  >     
      <g fill="#CA931B" >
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
    viewBox='0 0 100 100'
    className="full-control__benefits__icon-svg"
  >   
      <path
        fill="#111"
        d="M21.66 21.78h-3.34c-1.36 0-2.46-1.11-2.46-2.47s1.1-2.46 2.46-2.46h5.89c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2H21.2v-2.29c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v2.29h-.47c-2.67 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86h3.34c1.36 0 2.47 1.11 2.47 2.47s-1.11 2.46-2.47 2.46h-5.99c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2h3.12v2.33c0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2V31.5h.53c2.65-.03 4.8-2.21 4.8-4.86 0-2.69-2.18-4.86-4.87-4.86z"
      />
      <path
        style={{stroke: full_control__Svg_icon}}
        strokeWidth={2}
        d="M1.5 6.95c12.35-.12 16.96-3.34 18.49-5.03C21.47 3.56 26 6.83 38.5 6.95v21.54c0 1.76-.91 3.57-2.57 5.38-1.65 1.8-3.9 3.46-6.25 4.89-4.28 2.61-8.67 4.32-9.68 4.7-1.03-.39-5.4-2.1-9.68-4.7-2.35-1.43-4.6-3.09-6.25-4.89-1.66-1.81-2.57-3.62-2.57-5.38V6.95zM20.59 1.1c.01 0 .01-.01.01-.02 0 .01 0 .02-.01.02zm-2.5 3.42-.02.05c.01-.03.02-.05.01-.05-.04-.03-2.13 3.13-13.12 3.13-.91 0-2.12.67-2.12 2.02v17.52c0 2.32 1.2 4.36 2.71 6.02 1.54 1.67 3.54 3.12 5.48 4.3 3.85 2.34 7.76 3.8 8.19 3.96a2.257 2.257 0 0 0 1.57 0c.5-.19 4.37-1.64 8.18-3.96 1.94-1.18 3.94-2.63 5.47-4.3 1.52-1.67 2.72-3.7 2.72-6.02V9.67c0-1.34-1.2-2.02-2.12-2.02-10.45 0-12.91-2.84-13.16-3.18-.41-.75-1.19-1.08-1.86-1.08h-.03c-.71 0-1.5.36-1.9 1.13zm3.77-.08.01.02-.01-.02z"
      />
  </svg>

    </Fragment>
  )
}

export default FullControlSvg
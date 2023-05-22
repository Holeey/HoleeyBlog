import React, {Fragment} from 'react'
import './timeliness_svg.css'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'



const variants = {
  rotate: {rotate: 360, transition: { type: easeInOut, duration: 1 }},
  reverse_rotate: { rotate: -360, transition: { type: easeInOut, duration: 1 }},
}

const TimelinessSvg = ({timeliness__FormShadowColor, timeliness__Svg_icon }) => {
  return (
    <Fragment>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 300 250'
      className="timeliness__benefits__item-form"
    >
        <path
          fill="#3F4045"
          d="m121-8 120 62.5v125L121 242 1 179.5v-125L121-8z"
        />
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 250 250'
      className="timeliness__benefits__item-form-shadow"
    >
        <path
          style={{fill: timeliness__FormShadowColor}}
          d="m120 0 120 62.5v125L120 250 0 187.5v-125L120 0z"
        />
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 100 100'
      className="timeliness__benefits__icon-holder"
    >     
        <g fill= "#CA931B" >
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
    className="timeliness__benefits__icon-svg"
  >
    <g fill="#000">
      <path d="M20 9.904c-9.755 0-17.692 7.39-17.692 16.473C2.308 35.46 10.245 42.85 20 42.85c9.755 0 17.692-7.39 17.692-16.474S29.755 9.904 20 9.904ZM20 45C8.972 45 0 36.646 0 26.377 0 16.108 8.972 7.754 20 7.754s20 8.354 20 18.623C40 36.646 31.028 45 20 45" />
      <AnimatePresence mode='sync'>
        <motion.path fill="#000"
          variants={variants}
         animate={timeliness__Svg_icon ? "rotate" : "reverse_rotate" }
        d="M22.15 26.65c.12 1.29-.76 2.401-2.153 2.401h-.123c-1.392 0-2.274-1.11-2.152-2.402.27-2.882 1.36-8.552 1.783-11.064.088-.524.792-.418.861.013.47 2.942 1.513 8.17 1.784 11.051"
      />  
      </AnimatePresence>
      <path d="M20.886 13.905h-1.6v-2.483h1.6v2.483ZM11.05 16.97 9.96 17.983 8.057 16.21l1.088-1.013 1.904 1.773M6.486 25.823v1.49H3.819v-1.49h2.667ZM9.961 34.7l1.088 1.014-1.904 1.773-1.088-1.014 1.904-1.772M19.286 38.983h1.6v2.483h-1.6v-2.483ZM29.003 35.714l1.088-1.013 1.905 1.773-1.089 1.013-1.904-1.773M33.419 27.313v-1.49h2.933v1.49H33.42ZM30.091 17.983l-1.088-1.013 1.904-1.773 1.089 1.013-1.905 1.773M6.227 9.892c-.49-.457-1.219-.492-1.709-.035l-2.132 1.985c-.49.457-.453 1.134.038 1.591.43.4 1.08.433 1.618.086l1.231 1.146 2.277-2.12L6.32 11.4c.372-.5.336-1.107-.093-1.507M22.753 9.684h-5.067V3.476h5.067v6.208Z" />
      <path d="M24.62 4.36c0 .197-.173.358-.385.358h-8.031c-.212 0-.385-.16-.385-.359v-4c0-.199.173-.359.385-.359h8.03c.213 0 .385.16.385.358V4.36Z" />
    </g>
  </svg>
  
    </Fragment>
  )
}

export default TimelinessSvg
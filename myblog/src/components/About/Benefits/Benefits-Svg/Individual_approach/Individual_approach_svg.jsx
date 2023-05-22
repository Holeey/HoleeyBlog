import React, {Fragment} from 'react'
import './individual_approach_svg.css'

const IndividualApproachSvg = ({ individual_Approach__FormShadowColor, individual_Approach__Svg_icon }) => {
  return (
    <Fragment>
       
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 300 250'
      className="individual__benefits__item-form"
     
    >
      
        <path
          fill="#3F4045"
          d="m121-8 120 62.5v125L121 242 1 179.5v-125L121-8z"
        />
     
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 250 250'
      className="individual__benefits__item-form-shadow"
      
    >
        <path
          style={{fill: individual_Approach__FormShadowColor}}
          d="m120 0 120 62.5v125L120 250 0 187.5v-125L120 0z"
        />
    </svg>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 100 100'
      className="individual__benefits__icon-holder"
     
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
    className="individual__benefits__icon-svg"
   
  >
    <g fill="#111">
      <path d="M38.418 6.584C29.64-2.194 15.359-2.194 6.583 6.582c-8.778 8.777-8.777 23.058 0 31.836 8.776 8.776 23.057 8.776 31.834-.001 8.777-8.777 8.777-23.058.001-31.833Zm-2.456 29.378c-7.423 7.423-19.5 7.424-26.924.001-7.424-7.424-7.423-19.503 0-26.926 7.423-7.422 19.5-7.423 26.925.001 7.422 7.423 7.421 19.502-.001 26.924Zm-3.709-8.778c-1.63 3.77-5.449 6.207-9.727 6.207-4.371 0-8.212-2.449-9.786-6.239a1.273 1.273 0 1 1 2.35-.976c1.18 2.837 4.097 4.67 7.436 4.67 3.262 0 6.164-1.834 7.39-4.673a1.272 1.272 0 1 1 2.337 1.01Z" />
      <path
        d="M15.631 14a2.631 2.631 0 1 0 0 5.263 2.631 2.631 0 0 0 0-5.263ZM28.632 14a2.632 2.632 0 1 0 0 5.264 2.632 2.632 0 0 0 0-5.264Z"
        style={{
          opacity: 1
        }}
      />
    </g>
  </svg>
  
      </Fragment>
  )
}

export default IndividualApproachSvg
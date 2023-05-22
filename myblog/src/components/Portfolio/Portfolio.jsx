import React, { Fragment, useState } from 'react'
import './portfolio.css'
//import ideas_image from '../../assets/blog_image.png';
import { AnimatePresence, motion } from 'framer-motion';
import WebProjects from './WebProjects/WebProjects';
import mendImage from '../../assets/mendScreenshot.png'


const Portfolio = () => {
   const [isVisible, setIsVisible ] = useState(null)

   const ParentVariants = {
      initial:{y: -100, opacity: 0},
      animate:{y: 0, opacity: 1},
      transition:{ease: 'easeInOut', duration: 0.5},
      exit:{y: -100, opacity: 0, transition:{ease: 'easeInOut'}}
    }
 
  return (
    <Fragment>
      
          <div className='portfolio'>
          <h1>Portfolio </h1>
          <h3>Ideas for your website </h3>        
          <section className='section_col_grid'>
           
            <div className='ideas_example right_angle'>  
            <div  className='thumbnail_image'>
            
        <img   
            onMouseEnter={()=> setIsVisible(true)}  
            src={mendImage}  alt='thumbnail' />
            <AnimatePresence mode='wait'>
            {isVisible &&  <motion.a
             onMouseLeave={()=> setIsVisible(null)}
             variants={ ParentVariants }
             initial= 'initial'
             animate= 'animate'
             transition= 'transition'
             exit= 'exit'
        
             href={'https://github.com/Holeey/psychic-enigma/settings/pages'} target={'_blank'}>

             <div className='overlay'></div>    
              <span className='link_text'>Open an example website </span>
              </motion.a> }
            </AnimatePresence>
              </div>
            </div>
            <div className='ideas_example_description  reverse-right_angle' >Here you can choose an idea which will fit well to your project</div>
          </section>       
         <WebProjects />
        
         </div>  
         
    </Fragment>
  )
}

export default Portfolio
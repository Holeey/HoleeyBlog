import React, { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './homePage.css'
import Modal from '../Modal/Modal';
import { FaFacebook, FaTwitter, FaInstagram }  from "react-icons/fa";




const headerAnimation = {
    initial: {x: '-100vw'},
    animate: {x: '0vw' }
}

const HomePage = () => {

    const [showModal, setShowModal ] = useState(false);

  return (
    <Fragment><div className='homepage_main'> 
     <div className='header_container'>
        
        <AnimatePresence mode='wait'>
        <div className='header_text'>
        <motion.h1 variants={headerAnimation} 
        
        initial='initial' 
        animate='animate'
        transition={{type: 'spring', duration: 2, delay: 0.5 }} 
        className='header'>Website D<motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3, delay: 3}}>e</motion.span>velopment</motion.h1>
        

        
        <motion.p 
        className='header_paragraph'
        initial={{y: '-100vh'}}
        animate={{y: '0', opacity: 1, rotate: 360}}
        transition={{type: 'spring', delay: 1.5}}>Original Design and Responsive Layout 
        </motion.p>
        </div>
        
       </AnimatePresence>
      
 </div> 
      <motion.div className='header_foot' 
        initial={{y: '100vh'}} animate={{y: '0'}} transition={{type: 'easeIn', duration: 1, delay: 1}} >
            <div className='building_layout' onClick={()=> setShowModal(!showModal)}>Building Layout <h6>Get a price </h6></div>
            <div className='landing_page' onClick={()=> setShowModal(!showModal)}>Landing Page <h6>Get a price </h6></div>
            <div className='corporate_website' onClick={()=> setShowModal(!showModal)}>Corporate website<h6>Get a price </h6></div>
        </motion.div> 
      </div>
     <Modal showModal={showModal} setShowModal={setShowModal}  /> 
     
              <div className='font_awesome_container'>
        <a href='https://web.facebook.com/hezu.odoh'rel="noreferrer" className='homepage_facebook'><FaFacebook /> </a>
        <a href='https://twitter.com/home' rel="noreferrer" className='homepage_twitter'><FaTwitter /> </a>
        <a href='https://www.instagram.com/holeey_/' rel="noreferrer" className='homepage_instagram'><FaInstagram /> </a>
        </div>
        
    </Fragment>
  )
}

export default HomePage
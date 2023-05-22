import React, { Fragment, useState, useRef, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import  './navbar.css';
import { MdMenu } from 'react-icons/md'
import { MdClose } from 'react-icons/md'
import { FaEnvelope } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import Modal from '../Modal/Modal'
import  SvgComponent from '../CustomLogo/CustomLogo.jsx'



const Navbar = () => {

    const [ menuToggle, setMenuToggle ] = useState(false);

    const [ showModal, setShowModal ] = useState(false);

    const clickRef = useRef(null);

    const handleOutsideClick = (e) => {
     if(clickRef.current && !clickRef.current.contains(e.target)) {
        setMenuToggle(false);
      }
    }
  
    useEffect(() => {  
      document.addEventListener("click", handleOutsideClick, true); 
      return () => {
        document.removeEventListener("click", handleOutsideClick, true);
      };
    }); 
    
    const Menu = () => (
    <div className='menu'>
    <p><a href='portfolio'>Portfolio</a></p>
    <p><a href='about'>About</a> </p>
    <p><a href='contact'>Contact</a> </p>
    <p> <a href='mailto:odohizuchukwusamuel@gmail.com?subject=Service Inquiry&body= I would like to know...' className='my_email'><FaEnvelope /> odohizuchukwusamuel@gmail.com </a></p>
    </div>
)


  return (
    <Fragment>
        <div className='navbar'>
            <SvgComponent />
            <NavLink to='portfolio' id= 'portfolio'>Portfolio </NavLink>
            <NavLink to='about' id='about'>About </NavLink>
            <NavLink to='contact' id='contact'>Contact</NavLink>
            <a href='mailto:odohizuchukwusamuel@gmail.com?subject=Service Inquiry&body= I would like to know...' 
            className='my_email' id='email'><FaEnvelope /> odohizuchukwusamuel@gmail.com </a>
            <button className='navbar_btn' type='button' onClick={()=> setShowModal(!showModal)} >REQUEST A CALL</button>
        </div>
        <div className='mobile_Menu'>   
        <SvgComponent />
        <button className='navbar_btn' type='button' onClick={()=> setShowModal(!showModal)} >REQUEST A CALL</button>
            <div>
                {menuToggle
                ? <MdClose className='mdClose' color='white' size={30} onClick={()=> setMenuToggle(!menuToggle)} />
                : <MdMenu className='mdMenu' color='white' size={30} onClick={()=> setMenuToggle(!menuToggle)} />}
                {menuToggle &&  (
                <AnimatePresence mode='wait'>  
                <motion.div
                    ref={clickRef}
                    initial={{x: 500}}
                    animate={{x: 0}}
                    transition={{ease: 'easeInOut', duration: 1}}
                 className='menu_list'><Menu /></motion.div></AnimatePresence>   )}
            </div> 
        </div>

        <main>
            <Outlet />
        </main>

        <Modal showModal={showModal} setShowModal={setShowModal} />
       
    </Fragment>
  )
}

export default Navbar
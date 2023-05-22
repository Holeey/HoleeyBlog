import React, { Fragment } from 'react'
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram }  from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import FooterLogo from './footerSvg/FootLogo';
import ScrollToTopButton from '../../scroll_to_top/ScrollToTopButton';


const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='footer_container'>
        <FooterLogo />
        <p> <a href='mailto:odohizuchukwusamuel@gmail.com?subject=Service Inquiry&body= I would like to know...'  className='footer_my_email'><FaEnvelope /> odohizuchukwusamuel@gmail.com </a></p>
        <div>
        <a href='https://web.facebook.com/hezu.odoh' target='_blank' rel="noreferrer" className='footer_facebook'><FaFacebook /> </a>
        <a href='https://twitter.com/home'  target='_blank' rel="noreferrer" className='footer_twitter'><FaTwitter /> </a>
        <a href='https://www.instagram.com/holeey_/' rel="noreferrer" target='_blank' className='footer_instagram'><FaInstagram /> </a>
        </div>

        </div>
       <ScrollToTopButton />
      </footer>
    </Fragment>
  )
}

export default Footer
import React, { useState, useEffect } from 'react';
import './scroll_to_top_button.css';
import {FaArrowUp} from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add event listener to window to check if the user has scrolled
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    // Check if the user has scrolled more than 200px
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleClick() {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button
      className={isVisible ? 'scroll-to-top-button visible' : 'scroll-to-top-button'}
      onClick={handleClick}
    >
    <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;

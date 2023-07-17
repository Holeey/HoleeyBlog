import React, { useState } from 'react';
import Footer from '../../Navbar/Navbar_footer/Footer';
import './webprojects.css';
import { motion, AnimatePresence } from 'framer-motion';
//import ideas_image from '../../../assets/blog_image.png';
import mendImage from '../../../assets/mendScreenshot.png'

const webProjects = [
  {
    id: '01',
    name: 'MendHQ',
    img: mendImage,
    link: 'https://holeey.github.io/psychic-enigma/',
    linkText: 'Open an example website',
    ideaDescription: "volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu"
  },
 /*{
    id: '02',
    name: 'TitTok',
    img: ideas_image,
    link: 'https://github.com/Holeey/psychic-enigma/settings/pages',
    linkText: 'Open an example website',
    ideaDescription: "Very interesting technology of transition between pages. This effect will definitely imprint website of this financial agency in the visitors mind, which later will help convert them to the real clients!",
  },
  {
    id: '03',
    name: 'Instagram',
    img: ideas_image,
    link: 'https://github.com/Holeey/psychic-enigma/settings/pages',
    linkText: 'Open an example website',
    ideaDescription: "Very interesting technology of transition between pages. This effect will definitely imprint website of this financial agency in the visitors mind, which later will help convert them to the real clients!",
  }*/
];

const WebProjects = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  const handleMouseEnter = (project) => {
    setVisibleProject(project);
  };

  const handleMouseOut = () => {
    setVisibleProject(null);
  };

  const childVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { ease: 'easeInOut', duration: 0.5 },
    exit: { y: -100, opacity: 0, transition: { ease: 'easeInOut' } }
  };

  return (
    <>
      <h2>Website</h2>
      <div className='website_main_container' >{webProjects.map((project) => (
        
        <section key={project.id} className={`flex ${(project.id % 2 !== 0) ? '' : 'reverse-flex'}`}>
          <div className={`website_ideas_example_description ${(project.id % 2 !== 0) ? 'website_right_angle' : 'website_reverse-right_angle'}`}>
            <div className='descr_and_Img__container'> 
            <div className='description_container'>
              <p>{project.ideaDescription}</p>
            </div>
            <div className='website_thumbnail_image'>
              <img
                onMouseEnter={() => handleMouseEnter(project)}
                src={project.img}
                alt={project.ideaDescription}
              />
              <AnimatePresence>
                {visibleProject && visibleProject.id === project.id &&
                  <motion.a
                    onMouseOut={handleMouseOut}
                    variants={childVariants}
                    initial='initial'
                    animate='animate'
                    transition='transition'
                    exit='exit'
                    href={project.link}
                    target='_blank'
                  >{project.linkText}
                   
                  </motion.a>
                }
              </AnimatePresence>
            </div>
          </div> </div>
           
          <div className={`website_ideas_example ${(project.id % 2 !== 0) ? 'website_right_angle' : 'website_reverse-right_angle'}`}>
            <div className='project_name_container'>
              <p>{project.name}</p>
            </div>
          </div>
        </section>
      ))} </div>
      
      <Footer />
    </>
  );
};

export default WebProjects;

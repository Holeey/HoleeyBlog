import React, { Fragment, useState } from 'react'
import './skills.css'
import SkillsSvg from './Skill_Set_Svg/Skills_svg'
import { motion, AnimatePresence } from 'framer-motion';


const skill_inventory = [
    { id: '01', skill: 'HTML CSS', skillDescription: 'Responsive Design'},
    { id: '02', skill: 'svg Animation', skillDescription: 'Stunning UI/UX'},
    { id: '03', skill: 'Java Script', skillDescription: 'The language of the web'},
    { id: '04', skill: 'Git & Github', skillDescription: 'A version control system that helps in the workflow of projects'},
    { id: '05', skill: 'SCSS framerMotion', skillDescription: 'I can work with popular css libraries'},
    { id: '06', skill: 'React jQuery', skillDescription: 'I can work with popular js libraries and framework'},
]

const Skills = () => {
    const [toggle_svg_background, setToggle_svg_background ]  = useState(null);

    const [toggle_skill_descr_id, setToggle_skill_descr_id ] = useState(null);

    const svg_skill_animation = {
        initial: {y: -100, opacity: 0 },
        animate: {y: 0, opacity: 1, transition: {ease: 'easeInOut', duration: 1 }},
        
    }


  return (
    <Fragment>
        <section className='skill_section'>
            <div className='skill_wrapper'>
                <h1 className='skill_title'>My Skills</h1>
               
                <div className='skill_row'>
                <div className='svg_skills_wrapper'> 
                 {skill_inventory.map((item) => <>
                    <div key={item.id} className={`skill_item ${(item.id === '01') ? 'skill__item--1' 
                    : (item.id === '02') 
                    ? 'skill__item--2' 
                    : (item.id === '03') 
                    ? 'skill__item--3'
                    :  (item.id === '04') 
                    ?  'skill__item--4' 
                    : (item.id === '05') 
                    ? 'skill__item--5' 
                    : (item.id === '06') 
                    ? 'skill__item--6' 
                    : ''} `} 
                    onMouseEnter={()=>  setToggle_skill_descr_id(item)}
                    onMouseOver={()=>  setToggle_svg_background(true)}
                      
                    onMouseLeave={()=> setToggle_skill_descr_id(null)}
                    onMouseOut={()=> setToggle_svg_background(false)}>
                    <p>{item.skill}</p>
                    </div>
                    {toggle_skill_descr_id && toggle_skill_descr_id.id === item.id && 
                    <AnimatePresence mode='sync'> 
                    <motion.div key={item.id} 
                    className='skill__item__description'
                    variants={svg_skill_animation} 
                    initial= 'initial'
                    animate= 'animate'
                    
                  >
                    <p>
                    {item.skillDescription}
                    </p>
                    </motion.div>
                    </AnimatePresence>
                   }
                   </>
                    )}
                    <div id='svg_skill_shape'>
                        <SkillsSvg toggle_svg_background={toggle_svg_background}/> 
                    </div> 
                    </div>      
                </div>
            </div>
            <div className='skills__footer'></div>
                   
        </section>
    </Fragment>
  )
}

export default Skills







          
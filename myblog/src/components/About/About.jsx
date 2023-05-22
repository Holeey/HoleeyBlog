import React, { Fragment } from 'react'
import AboutSvg from './About-Svg/AboutSvg'
import './about.css'
import Skills from './Skill_Set/Skills'
import Benefits from './Benefits/Benefits'


const About = () => {
  return (
  <Fragment>
    <section className='about_section'>
        <div className='about_wrapper'>
            <div className='about_container'>
               
                    <div className='about_description'>
                    <h1 className='about_section_title yellow_underline'>About</h1>
                    <p>Hello, my name is Holeey and I'm a web-developer. </p>
                    <p>I am passionate about building excellent websites, 
                    it's not just my work but it's the way I express myself.
                    </p> 
                </div>
         
           <div className='about_svg_wrapper'><AboutSvg />  </div></div>
 
        </div>
        <Skills />
        <Benefits />
    </section>
  </Fragment>
  )
}

export default About
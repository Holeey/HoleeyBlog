import React, { Fragment, useState } from 'react'
import Footer from '../../Navbar/Navbar_footer/Footer'
import './benefits.css'
import FullControlSvg from './Benefits-Svg/Full_control/Full_control_svg'
import Discount from './Benefits-Svg/Discount_&_bonuses/Discount'
import { HighQualitySvg } from './Benefits-Svg/High_quality/High_quality_svg'
import TimelinessSvg from './Benefits-Svg/Timeliness/Timeliness_svg'
import IndividualApproachSvg from './Benefits-Svg/Individual_approach/Individual_approach_svg'
import OriginalLayoutSvg from './Benefits-Svg/Original_layout/Original_layout_svg'




const Benefits = () => {
  // state for full control svg
  const [full_control__formShadowcolor, setfull_control__FormShadowColor] = useState('');
  const [full_control__Svg_icon, setfull_control__Svg__icon] = useState('');

  // state for timeliness svg
  const [timeliness__FormShadowColor, setTimeliness__FormShadowColor] = useState('');
  const [timeliness__Svg_icon, setTimeliness__Svg_icon] = useState(false);

  // state for high quality svg
  const [high__Quaity__FormShadowColor, setHigh__Quality__FormShadowColor] = useState('');
  const [high__Quaity__Svg_icon, setHigh__Quality__Svg_icon] = useState(false);

  // state for individual approach 
  const [individual_Approach__FormShadowColor, setIndividual_Approach__FormShadowColor] = useState('');
  const [individual_Approach__Svg_icon, setIndividual_Approach__Svg_icon] = useState(false);
  
  // state for original layout
  const [original_layout_FormShadowColor , setOriginal_Layout_FormShadowColor] = useState('');
  const [original_Layout_Svg_icon , setOriginal_Layout_Svg_icon] = useState('');

  // state for discount
  const [ discount__FormShadowColor, setDiscount__FormShadowColor] = useState('');
  const [discount__Svg_icon, setDiscount__Svg_icon] = useState(false);
  

  return (
   <Fragment>
    <section className='benefits'>
        <div className='benefits__overlay'>
          <div className='benefits_overlay_wrapper'>
            <div className=' benefits__container'> 
            <h1 className='title'>My Advantages</h1>
                </div>
            </div>
        </div>
          
          <div className='benefits__polygons__container'>         
          <div className='container'> 

            
                          <div  
                                onMouseLeave={() => setfull_control__FormShadowColor('#000')} 
                                onMouseOut={()=> setfull_control__Svg__icon("#CA931B")}
                                className='benefits__polygon-full_control polygon_svg_width'> 
                                <FullControlSvg 
                                full_control__Svg_icon={full_control__Svg_icon} 
                                full_control__formShadowColor={full_control__formShadowcolor}/>                                                
                                <div className='benefits__item_full__control  '>
                                <div 
                                onMouseEnter={()=> setfull_control__FormShadowColor("#CA931B")}
                                onMouseOver={()=> setfull_control__Svg__icon("#000")}
                                className='benefits__item-caption'>   

                                <span className='benefits_item_title'>Full Control </span>

                                <p className='benefits__item-content'>
                                  Milestone reports will be sent to you regularly, to keep you updated with project's UI/UX design changes and progress. 
                                 </p> </div> </div> </div>
                                
                          
                        
                        <div
                                 onMouseLeave={() => setTimeliness__FormShadowColor('#000')} 
                                 onMouseOut={()=> setTimeliness__Svg_icon(false)}
                                 className='benefits__polygon-timeliness polygon_svg_width'> 
                                 <TimelinessSvg 
                                 timeliness__Svg_icon={timeliness__Svg_icon} 
                                 timeliness__FormShadowColor={timeliness__FormShadowColor} /> <div className='benefits__item-timeliness '>
                            <div
                            onMouseEnter={()=> setTimeliness__FormShadowColor("#CA931B")}
                            onMouseOver={()=> setTimeliness__Svg_icon(true)}
                            className='benefits__item-caption'>   
                           <span className='benefits_item_title'>Timeliness </span>
                                <p className='benefits__item-content'>
                                Time is money! After we discuss all details, I'll do the work within the agreed deadline. </p> </div> 
                                </div> </div> 



                        <div
                                onMouseLeave={()=> setHigh__Quality__FormShadowColor('#000')}
                                onMouseOut={()=> setHigh__Quality__Svg_icon(false)}
                                 className='benefits__polygon-high_quality polygon_svg_width'>
                                   <HighQualitySvg 
                                    high__Quaity__FormShadowColor={high__Quaity__FormShadowColor}
                                    high__Quaity__Svg_icon={high__Quaity__Svg_icon} />
                                <div className='benefits__item-high_quality'>
                                <div 
                                onMouseEnter={()=> setHigh__Quality__FormShadowColor('#CA931B')}
                                onMouseOver={()=> setHigh__Quality__Svg_icon(true)}
                                className='benefits__item-caption' >
                                <span className='benefits_item_title'>High Quality </span> 
                                <p className='benefits__item-content'>
                                Responsive, multi-browser layout with compliance of SEO-standards and BEM methodology </p> </div> 
                                </div> </div> 
                               
                         <div 
                                onMouseLeave={()=> setIndividual_Approach__FormShadowColor('#000')}
                                onMouseOut={()=> setIndividual_Approach__Svg_icon(false)}
                                className='benefits__polygon-individual_approach polygon_svg_width'>
                                <IndividualApproachSvg 
                                individual_Approach__Svg_icon={individual_Approach__Svg_icon}
                                individual_Approach__FormShadowColor={individual_Approach__FormShadowColor} />     
                                <div className='benefits__item-individual_approach ' >
                                <div 
                                onMouseEnter={()=> setIndividual_Approach__FormShadowColor('#CA931B')}
                                onMouseOver={()=> setIndividual_Approach__Svg_icon(true)}
                                className='benefits__item-caption'>
                                <span className='benefits_item_title'>Individual Approach </span>
                                <p  className='benefits__item-content'>
                                  Every business is unique. 
                                  I'll research your project thoroughly to understand what do you need. </p>
                                </div>  </div> </div> 
                          
                          
                         <div
                                onMouseLeave={()=> setOriginal_Layout_FormShadowColor('#000')}
                                onMouseOut={()=> setOriginal_Layout_Svg_icon('#000')}
                                 className='benefits__polygon-original_layout polygon_svg_width'>
                                <OriginalLayoutSvg 
                                original_Layout_Svg_icon={original_Layout_Svg_icon}
                                original_layout_FormShadowColor={original_layout_FormShadowColor} /> 
                                 <div className='benefits__item-original_layout ' >
                                <div 
                                onMouseEnter={()=> setOriginal_Layout_FormShadowColor('#CA931B')}
                                onMouseOver={()=> setOriginal_Layout_Svg_icon('#fff')}
                                className='benefits__item-caption'>
                                <span className='benefits_item_title'>Original Layout </span>
                                <p className='benefits__item-content'>
                                
                                Original design without templates. Creating websites with love. </p></div> </div> </div>
                          
                         
                          <div
                                onMouseLeave={()=> setDiscount__FormShadowColor('#000')}
                                onMouseOut={()=> setDiscount__Svg_icon(false)}
                                className='benefits__polygon-discount polygon_svg_width'> 
                                <Discount 
                                discount__FormShadowColor={discount__FormShadowColor}
                                discount__Svg_icon={discount__Svg_icon} />
                                <div className='benefits__item-discount '>
                                <div 
                                onMouseEnter={()=> setDiscount__FormShadowColor('#CA931B')}
                                onMouseOver={()=> setDiscount__Svg_icon(true)}
                                className='benefits__item-caption'>
                                <span className='benefits_item_title'>Discount and bonuses</span>
                                <p className='benefits__item-content'>
                                Prices are lower for loyal customers  </p></div></div> </div>
                         
  
  
                                  

          </div>
         </div>     
                           
                        
                  
                      
            <Footer />
      </section>
   </Fragment>
  )
}

export default Benefits
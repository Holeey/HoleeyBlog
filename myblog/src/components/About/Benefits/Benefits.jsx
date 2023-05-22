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
            <div className=' container benefits__container'> 
            <h1 className='title'>My Advantages</h1>
                </div>
            </div>
        </div>
                  <div className='benefits__polygons__container'> 
                 
                    <div className='container'> 

                      <div className='benefits__rows--1 ' >              
                                                
                                <div className='benefits__item '>
                                <div 
                                onMouseEnter={()=> setfull_control__FormShadowColor("#CA931B")}
                                onMouseOver={()=> setfull_control__Svg__icon("#000")}
                                className='benefits__item-caption'>   

                                <span className='benefits_item_title'>Full Control </span>

                                <p className='benefits__item-content'>
                                Are you afraid that developer will disappear and in the end will confess that he/she couldn't complete the task?.
                                That is an uncomfortable situation, that's why I'll send you milestone reports </p></div> 

                                <div  
                                onMouseLeave={() => setfull_control__FormShadowColor('#000')} 
                                onMouseOut={()=> setfull_control__Svg__icon("#CA931B")}
                                className='benefits__polygon'>
                                <FullControlSvg 
                                full_control__Svg_icon={full_control__Svg_icon} 
                                full_control__formShadowColor={full_control__formShadowcolor}/> </div>
                                
                            </div>
                        </div>

                        <div  className='benefits__rows--2 ' > 
                            <div className='benefits__item__group__wrapper--1 '>
                          
                           <div className='benefits__item '>
                           <div
                            onMouseEnter={()=> setTimeliness__FormShadowColor("#CA931B")}
                            onMouseOver={()=> setTimeliness__Svg_icon(true)}
                            className='benefits__item-caption'>   
                           <span className='benefits_item_title'>Timeliness </span>
                                <p className='benefits__item-content'>
                                Time is money! After we discuss all details, I'll do the work within the agreed deadline. </p> </div>
                                <div
                                 onMouseLeave={() => setTimeliness__FormShadowColor('#000')} 
                                 onMouseOut={()=> setTimeliness__Svg_icon(false)}
                                 className='benefits__polygon'> 
                                 <TimelinessSvg 
                                 timeliness__Svg_icon={timeliness__Svg_icon} 
                                 timeliness__FormShadowColor={timeliness__FormShadowColor} /> </div> 
                       
                          </div>
                      
                                <div className='benefits__item'>
                                <div 
                                onMouseEnter={()=> setHigh__Quality__FormShadowColor('#CA931B')}
                                onMouseOver={()=> setHigh__Quality__Svg_icon(true)}
                                className='benefits__item-caption' >
                                <span className='benefits_item_title'>High Quality </span> 
                                <p className='benefits__item-content'>
                                Responsive, multi-browser layout with compliance of SEO-standards and BEM methodology </p> </div>
                                <div
                                onMouseLeave={()=> setHigh__Quality__FormShadowColor('#000')}
                                onMouseOut={()=> setHigh__Quality__Svg_icon(false)}
                                 className='benefits__polygon'>
                                   <HighQualitySvg 
                                    high__Quaity__FormShadowColor={high__Quaity__FormShadowColor}
                                    high__Quaity__Svg_icon={high__Quaity__Svg_icon} /> </div>
                                 </div>
                            </div>
                            
                       </div>
  
                         
                      <div className='benefits__rows--3'>
                            
                            <div  className='benefits__item__group__wrapper--2 ' >
                                <div className='benefits__item ' >
                                <div 
                                onMouseEnter={()=> setIndividual_Approach__FormShadowColor('#CA931B')}
                                onMouseOver={()=> setIndividual_Approach__Svg_icon(true)}
                                className='benefits__item-caption'>
                                <span className='benefits_item_title'>Individual Approach </span>
                                <p  className='benefits__item-content'>
                                  Every business is unique. 
                                  I'll research your project thoroughly to understand what do you need. </p>
                                </div>
                                <div 
                                onMouseLeave={()=> setIndividual_Approach__FormShadowColor('#000')}
                                onMouseOut={()=> setIndividual_Approach__Svg_icon(false)}
                                className='benefits__polygon'>
                                <IndividualApproachSvg 
                                individual_Approach__Svg_icon={individual_Approach__Svg_icon}
                                individual_Approach__FormShadowColor={individual_Approach__FormShadowColor} />  </div> 
                               </div>
                          
                                <div className='benefits__item ' >
                                <div 
                                onMouseEnter={()=> setOriginal_Layout_FormShadowColor('#CA931B')}
                                onMouseOver={()=> setOriginal_Layout_Svg_icon('#fff')}
                                className='benefits__item-caption'>
                                <span className='benefits_item_title'>Original Layout </span>
                                <p className='benefits__item-content'>
                                
                                Original design without templates. Creating websites with love. </p></div>
                                <div
                                onMouseLeave={()=> setOriginal_Layout_FormShadowColor('#000')}
                                onMouseOut={()=> setOriginal_Layout_Svg_icon('#000')}
                                 className='benefits__polygon'>
                                <OriginalLayoutSvg 
                                original_Layout_Svg_icon={original_Layout_Svg_icon}
                                original_layout_FormShadowColor={original_layout_FormShadowColor} /> </div>
                                  
                                </div>
                               </div>  

                                <div className='benefits__item '>
                                <div 
                                onMouseEnter={()=> setDiscount__FormShadowColor('#CA931B')}
                                onMouseOver={()=> setDiscount__Svg_icon(true)}
                                className='benefits__item-caption'>
                                <span className='benefits_item_title'>Discount and bonuses</span>
                                <p className='benefits__item-content'>
                                Prices are lower for loyal customers  </p></div>
                                <div
                                onMouseLeave={()=> setDiscount__FormShadowColor('#000')}
                                onMouseOut={()=> setDiscount__Svg_icon(false)}
                                className='benefits__polygon'> 
                                <Discount 
                                discount__FormShadowColor={discount__FormShadowColor}
                                discount__Svg_icon={discount__Svg_icon} /></div>
                                  
                               </div>
                            </div>
                  
                      </div>
                     
                      </div> 
                      
            <Footer />
    </section>
   </Fragment>
  )
}

export default Benefits
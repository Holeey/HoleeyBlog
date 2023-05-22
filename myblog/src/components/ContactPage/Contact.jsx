import React, { Fragment, useState, useRef } from 'react'
import './contact.css'
import Footer from '../Navbar/Navbar_footer/Footer';
import { FaFacebook, FaTwitter, FaInstagram }  from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [prefered, setPrefered] = useState('email');
    const [ contact_firstName, setContact_firstName ] = useState('');
    const [ contact_lastName, setContact_lastName ] = useState('');
    const [ contact_number, setContact_number ] = useState('');
    const [ contact_email, setContact_email ] = useState('');
    const [ message_subject, setMessage_subject ] = useState('')
    const [ contact_message, setContact_message ] = useState('');
    const [ sent, setSent ] = useState(false);
    
    const handleFirstNameChange = (value) => {
        let name_regex = /^[A-Za-z\s*]*$/
        if (name_regex.test(value) && value.length <= 40) {
            setContact_firstName(value);
        } 
        return '';
    }

    const handleLastNameChange = (value) => {
        let name_regex = /^[A-Za-z\s*]*$/
        if (name_regex.test(value) && value.length <= 40) {
            setContact_lastName(value);
  
        } 
        return '';
    }

    const handleSubject = (value) => {
        let name_regex = /^[A-Za-z\s*]*$/
        if (name_regex.test(value) && value.length <= 40) {
               setMessage_subject(value);
        } 
        return '';
    }

    const handlePhoneNumChange = (value) => {
        let phoneNum_regex = /^(\+?\d*)$/
        if (phoneNum_regex.test(value) && value.length <= 15) {
            setContact_number(value);
        } 
        return '';
    }

    const handleEmailChange = (value) => {
        let email_regex = /^[^\s@]*@?[^\s@]*\.?[^\s@]*$/
        if (email_regex.test(value) && value.length <= 40 ) {
            setContact_email(value);
        } 
        return '';
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bq4ca98', 'template_xgmj6ls', form.current, 'hT2cpHVXcwFVgE4uq')
        .then((result) => {
            setSent(true);
            resetForm();
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const resetForm = () => {
        setContact_email('');
        setContact_message('');
        setContact_firstName('')
        setContact_lastName('');
        setMessage_subject('');
        setContact_number('');
         setTimeout(()=> {
            setSent(false)
         }, 4000)
    }

  return (
    <Fragment>
        <div className='contact__section'>
            <div className='contact__title'><h1>My Contact</h1></div>
            <div className='lead__form'>
                <div className='contact__container_1 right_angle_gradient'>
           
                    <form ref={form} className='form__field' onSubmit={sendEmail}> 
                      <h3>Leave a  request and I will contact you </h3> 
                      <div className='names_container'> 
                      <label htmlFor='first name' > First Name </label> 
                      <input type='text' name='user_firstName' value={contact_firstName} onChange={(e)=>handleFirstNameChange(e.target.value)} required />
                      <label htmlFor='first name' > Last Name </label> 
                      <input type='text' name='user_lastName' value={contact_lastName} onChange={(e)=>handleLastNameChange(e.target.value)} required />
                    </div>

                      <h4>Choose your prefered method of communication:</h4>
                      <div className='prefered__method__wrapper'> 
                      <label htmlFor='email'>Email </label>
                      <input type='radio' name='email-phone number' value={'email'} onClick={(e)=> setPrefered(e.target.value)}/> 
                      <label htmlFor='phone number'>Phone number </label>
                      <input type='radio' name='email-phone number' value={'phone number'}  onClick={(e)=> setPrefered(e.target.value)} /> 
                      </div>

                      {(prefered === 'phone number')  &&  <><label htmlFor='phone number'>Your phone number</label> 
                      <input type='tel' name='user_number' value={contact_number} onChange={(e)=> handlePhoneNumChange(e.target.value)} required /> </>}
                       
                      {(prefered === 'email') && <><label htmlFor='email'>Email</label> 
                      <input  type='email' name='user_email' value={contact_email} onChange={(e)=> handleEmailChange(e.target.value)} required />  </>} 
                    
                     

                      <label htmlFor='textarea'>Your Question </label>
                      <input type='text' value={message_subject} onChange={(e)=> handleSubject(e.target.value)} name='subject' placeholder='subject' required /> 
                      <textarea name='message' onChange={(e)=> setContact_message(e.target.value)} id='textarea' value={contact_message} placeholder='I would like to know...' required/>
                 
                      <div className='submit_button_wrapper'>
                      <button type='submit' className={sent ? 'message_sent':'contact__submit__button'}>{(sent) ? <>Submitted!</> : <>Submit</> }</button>
                      </div> 

                    </form>
                </div>
                <div className='contact__container_2 reverse_right_angle_gradient'>
                    <div className='social__media__container__wrapper '>
                    <h3>Or contact me on any of the social media platforms</h3> 
                    <div className='social__media__container'>
                    <p><a href='https://web.facebook.com/hezu.odoh'rel="noreferrer" target='_blank' className='contact_facebook'><FaFacebook /> </a></p>
                    <p><a href='https://twitter.com/home' rel="noreferrer" target='_blank' className='contact_twitter'><FaTwitter /> </a></p>
                    <p><a href='https://www.instagram.com/holeey_/' rel="noreferrer" target='_blank' className='contact_instagram'><FaInstagram/></a> </p>
                </div>
                </div>
                </div>
            </div>  
            <Footer />  
        </div>
    </Fragment>
  )
}

export default Contact
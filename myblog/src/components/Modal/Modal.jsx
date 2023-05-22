import React, { Fragment, useState, useRef, useEffect } from 'react'
import './modal.css'
import { MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser';


const modalAnimation = {
  initial: {y: '100vh'},

  animate: {y: '0'} ,

  transition: {type: 'easeIn', delay: 0.5},
}


const Modal = ({ showModal, setShowModal }) => {

  
// to handle name and number inputs
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ sent, setSent ] = useState(false);

  const handleNameChange = (value) => {
    let name_regex = /^[A-Za-z\s*]*$/
    if (name_regex.test(value) && value.length <= 40) {
        setName(value);
    } 
    return '';
}

const handlePhoneNumChange = (value) => {
    let phoneNum_regex = /^(\+?\d*)$/
    if (phoneNum_regex.test(value) && value.length <= 15) {
        setNumber(value);
    } 
    return '';
}
  
// to handle click outside the modal box
  const clickRef = useRef(null);

  const handleOutsideClick = (e) => {
   if(clickRef.current && !clickRef.current.contains(e.target)) {
      setShowModal(false);
    }
  }

  useEffect(() => {  
    document.addEventListener("click", handleOutsideClick, true); 
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }); 


// useRef for form to send email via emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bq4ca98', 'template_xgmj6ls', form.current, 'hT2cpHVXcwFVgE4uq')
      .then((result) => {
        setSent(true)
        resetForm();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setTimeout (()=> {
      setShowModal(false);
      setSent(false);
    }, 4000)
  }
  
  return (
    <Fragment>
      <AnimatePresence mode='wait'>
         {showModal && <motion.div className='backdrop'>
          
          <motion.form 
          ref={form}
          onSubmit={sendEmail}
          variants={modalAnimation}  
          initial='initial' 
          animate='animate' 
          transition='transition' 
          exit='initial'
          >
            
            <div  className='request_a_call_form'  ref={clickRef}> 
            <MdClose size={40} className='close_btn' onClick={()=> setShowModal(false)}/>
            <h1>Leave a request and I'll get in touch with you!</h1>

            <label className='modal_label' htmlFor='name'>What is your name?</label>
            <input
            name='user_name'
            className='modal_input' 
            required
            value={name} 
            onChange={(e)=> handleNameChange(e.target.value)} />
            
           <label  className='modal_label' htmlFor='phone number'>Your phone number</label>
            <input 
            name='user_number'
            className='modal_input'
            required
            value={number} 
            onChange={(e)=> handlePhoneNumChange(e.target.value)} /> 
         
            <button className={sent? 'sent': 'submit_btn'} type='submit'>{(sent) ? <>Submitted!</> : <>Submit</> } </button>
            </div>
          </motion.form>
         </motion.div>
        }
      </AnimatePresence>       

    </Fragment>
  )
}

export default Modal
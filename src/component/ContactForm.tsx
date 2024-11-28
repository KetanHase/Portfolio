import React from 'react';
import './Contact.css';
 
 


const ContactForm: React.FC = () => {
  return (
    <div className='form'>
      <form>
        <label>Name</label>
        <input type='text' /> 
        <label>Email</label>
        <input type='text' /> 
        <label>Subject</label>
        <input type='text' /> 
        <label>Message</label>
         <textarea rows={6} placeholder='Message ' />
         <button className='btn'>Submit</button>
      </form>
       
    </div>
  );
};

export default ContactForm;
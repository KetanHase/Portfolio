import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import ContactForm from '../component/ContactForm';


const Contact: React.FC = () => {
  return (
    
    <div>
       <Navbar />
       <HeroImg2 heading="CONTACT." text="some contain"/>
       <ContactForm />
       <Footer />
    </div>
  );
};

export default Contact;

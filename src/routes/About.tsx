import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import AboutContent from '../component/AboutContent';
import HeroImg2 from '../component/HeroImg2';
import Expertise from '../component/Expertise';
import Certification from '../component/Certification';

const About: React.FC = () => {
  return (
    
    <div>
       <Navbar />
       <HeroImg2 heading="ABOUT." text="some contain"/>
       <AboutContent />
        
       <Expertise   />
       <Certification />
       <Footer />
    </div>
  );
};

export default About;

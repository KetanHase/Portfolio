import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import PricingCard from '../component/PricingCard';
import WorkCard from '../component/WorkCard';
 

const Project: React.FC = () => {
  return (
    
    <div>
       <Navbar />
       <HeroImg2 heading="PROJECTS." text="some contain"/>
       <WorkCard />
       <PricingCard />
       <Footer />
    </div>
  );
};

export default Project;

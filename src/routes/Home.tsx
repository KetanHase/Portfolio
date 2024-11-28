import React from 'react';
import Navbar from '../component/Navbar';
import HeroImg from '../component/HeroImg';
import Footer from '../component/Footer';
import WorkCard from '../component/WorkCard';
import AboutContent from '../component/AboutContent';
import Certification from '../component/Certification';

const Home: React.FC = () => {
  return (
    
    <div>
       <Navbar />
       <HeroImg />
       <WorkCard />
       <AboutContent />
       <Certification />
       <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Navbar from '../component/Navbar';
import HeroImg from '../component/HeroImg';
import Footer from '../component/Footer';
import WorkCard from '../component/WorkCard';

const Home: React.FC = () => {
  return (
    
    <div>
       <Navbar />
       <HeroImg />
       <WorkCard />
       <Footer />
    </div>
  );
};

export default Home;

import "./HeroImg2.css";
import React  from 'react';
 
interface HeroImg2Props {
    heading: string;
    text: string;
    
  }
  
  const HeroImg2: React.FC<HeroImg2Props> = ({ heading, text   }) => {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
           
        </div>
      </div>
    );
  };
  
  export default HeroImg2;
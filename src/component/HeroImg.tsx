import "./HeroImg.css";
import React from 'react';
import INTRBG from '../img/intro-bg.jpg';
import { Link } from "react-router-dom";


const HeroImg: React.FC = () => {
  return (
    <div className="hero">
      <div className="mask">
       <img className="into-img"
       src={INTRBG} alt="A Home background"  />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
        <a href="/pdf/KETAN_HASE_7038791841.pdf" target="_blank" className="btn" rel="noopener noreferrer" >Download My Cv</a>
      
      
        <Link to="/contact" className="btn btn-light">Contacts 
        </Link>

      </div>
      </div>
    </div>
  );
};

export default HeroImg;
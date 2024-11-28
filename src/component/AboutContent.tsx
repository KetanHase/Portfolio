import React from 'react';
import './AboutContent.css';
import './Footer.css';
import { Link } from 'react-router-dom';
 


const AboutContent: React.FC = () => {
  return (
    <div className='about'>
      <div className='left'>
       <h1>Who I AM?</h1>
       <p>A Web Designer / Developer.</p>
       <p>aa</p>
       <Link to="/contact">
       <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='personal-info-card'>
          <h2>Personal Info</h2>
          <ul>
            <li><strong>Birthdate:</strong> 17/04/2002</li>
            <li><strong>Email:</strong> ketanhase999@gmail.com</li>
            <li><strong>Phone:</strong> + 91 7038791841</li>
            <li><strong>Skype:</strong> Ketan Hase </li>
            <li><strong>Address:</strong> Perment-SANGAMNER  rrrrrrrrr </li>
            <li className="indent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  TEMP-PUNE MAHARASHTRA rrrrrrrrrrrrrrrrrrrrr</li>
        
                 
          </ul>
        </div>
      </div>
        
    </div>
  );
};

export default AboutContent;
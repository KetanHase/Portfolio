import React from 'react';
import './AboutContent.css';
import './Footer.css';
import { Link } from 'react-router-dom';
 


const AboutContent: React.FC = () => {
  return (
    <div className='about'>
      <div className='left'>
       <h1>Ketan Hase </h1>
       <p>I am a Fullstack Developer based in Pune. Has Computer Science background. 
        I am a Fullstack Developer based in Pune looking for exciting opportunities. Has Computer Science background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing Cricket, travelling and listening lofi songs. Learning more to improve skill.</p>
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
            <li><strong>Address:</strong> Perment-SANGAMNER    </li>
            <li className="indent">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  TEMP-PUNE MAHARASHTRA  </li>
        
                 
          </ul>
        </div>
      </div>
        
    </div>
  );
};

export default AboutContent;
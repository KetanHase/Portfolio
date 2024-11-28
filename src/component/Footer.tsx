import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone,  FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff",
              marginRight: "2rem" }} />
              <div>
                <p>Lohegoan</p>
                <p>Pune</p>
              </div>
          </div>
          <div className='phone'>
          <h4>  <FaPhone size={20} style={{color:"#fff",
              marginRight: "2rem" }} />
               7766994422 
               </h4>
          </div>
          <div className='email'>
           <h4> 
            <FaMailBulk 
            size={20} 
            style={{color:"#fff",
              marginRight: "2rem" }} />
                info@gmail.com
            </h4>
          </div>

        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p> scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
          <div className='social'>
          <FaFacebook size={30} style={{color:"#fff",
              marginRight: "1rem" }} />
            <FaGithub size={30} style={{color:"#fff",
            marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{color:"#fff",
            marginRight: "1rem" }} />
            <FaWhatsapp size={30} style={{color:"#fff",
              marginRight: "1rem" }} />
          </div>
          </div>
      </div>
      <div className='social-section'>
        <ul>
          <li><a href='#' target="_blank"><FaFacebook size={30} style={{color:"#fff",
              marginRight: "1rem" }} /></a></li>
          <li><a href='#' target="_blank"><FaGithub size={30} style={{color:"#fff",
            marginRight: "1rem" }} /></a></li>
          <li><a href='#' target="_blank"><FaLinkedin size={30} style={{color:"#fff",
            marginRight: "1rem" }} /></a></li>
          <li><a href='#' target="_blank"><FaWhatsapp size={30} style={{color:"#fff",
              marginRight: "1rem" }} /></a></li>
        </ul>

      </div>
       
    </div>
  );
};

export default Footer;
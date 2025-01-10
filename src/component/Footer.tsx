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
               7038791841
               </h4>
          </div>
          <div className='email'>
           <h4> 
            <FaMailBulk 
            size={20} 
            style={{color:"#fff",
              marginRight: "2rem" }} />
                ketanhase999@gmail.com
            </h4>
          </div>

        </div>
        <div className='right'>
          <h4>About</h4>
          <p> Say hello at ketanhase999@gmail.com For more info, here's my Resume</p>
          <div className='social'>
          <a href='https://github.com/KetanHase' target="_blank" rel="noreferrer"><FaGithub size={30} style={{color:"#fff",
            marginRight: "1rem" }} /></a>
            <a href='www.linkedin.com/in/ketan-hase-8230aa2aa' target="_blank"><FaLinkedin size={30} style={{color:"#fff",
            marginRight: "1rem" }} /></a>
             <FaFacebook size={30} style={{color:"#fff",
              marginRight: "1rem" }} />
            <a href="https://wa.me/7038791841?text=Hello" target="_blank"rel="noopener noreferrer"><FaWhatsapp size={30} style={{color:"#fff",
              marginRight: "1rem" }} /></a>
          </div>
          </div>
      </div>
      <div className='social-section'>
        <ul>
          
          <li><a href='https://github.com/KetanHase' target="_blank" rel="noreferrer"><FaGithub size={30} style={{color:"#fff",
            marginRight: "1rem" }} /></a></li>
          <li><a href='www.linkedin.com/in/ketan-hase-8230aa2aa' target="_blank"><FaLinkedin size={30} style={{color:"#fff",
            marginRight: "1rem" }} /></a></li>
          <li><a href="https://wa.me/7038791841?text=Hello" target="_blank"rel="noopener noreferrer">
          <FaWhatsapp size={30} style={{color:"#fff",
              marginRight: "1rem" }} /></a></li>
              <li> <FaFacebook size={30} style={{color:"#fff",
              marginRight: "1rem" }} /> </li>
        </ul>

      </div>
       
    </div>
  );
};

export default Footer;
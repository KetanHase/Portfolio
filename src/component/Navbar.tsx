import React, { useState } from 'react';
import "./Navbar.css";
import  { Link } from "react-router-dom" ;
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {

  const [click,setClick] = useState(false);
  const handleClick = () =>setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor =() =>{
    if(window.scrollY >=100){
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    
    <div className={color ? ".header header-bg":
      "header"}>
      <Link to="/">
      <h1>Ketan Hase </h1>
       <h3>Web Designer / Developer</h3>
      </Link>
    
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <a href="/pdf/KETAN_HASE_7038791841.pdf" target="_blank" rel="noopener noreferrer" > 
      <button className="block md:inline-block px-4 py-2">Download Cv</button>
      </a>
      
    </ul>
    <div className='hamburger' onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color: "#fff" }
    }/>
        
  ) :(
    <FaBars size={20} style={{color: "#fff" }
  }/>
  )
  }
      
      
    </div>
    </div>
  );
};

export default Navbar;

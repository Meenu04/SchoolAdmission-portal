import React from "react";
 import {Link} from 'react-scroll';
import "./Navbar.css";
import {Link as Treee} from "react-router-dom";

import Admission from "./Admission";


export default function Navbar(){
    
    return(
       
    <div className="year">
    <a href="/" className="site-title">SCHOOL</a>
    <div className="navcontact">
  
    <Treee to="/home">HOME</Treee>
    <Link to="about" smooth={true} offset={200} duration={500}>ABOUT US</Link>
    <Link to="cont" smooth={true} offset={200} duration={500}>CONTACT US</Link>
    <div class="dropdown">
    <button class="dropbtn">
    <div className="menuicon"></div>
    <div className="menuicon2"></div>
    <div className="menuicon3"></div>
    </button>
    <div class="dropdown-content">
      
     <Treee to="/ad">ADMISSION</Treee>
     <Treee to="/fee">FEES</Treee> 
     <Treee to="/feed">FEEDBACK</Treee> 
     
      
      <Treee to="/sts">STATUS CHECK</Treee>
     
      </div>
      </div>
    </div>
    </div>

  

      
        
      
    )
    
}







import React from "react";
 import {Link} from 'react-scroll';
import "./AdminNavbar.css";
import {Link as Treee} from "react-router-dom";

import Admission from "./Admission";


export default function Navbar(){
    
    return(
       
    <div className="nav">
   <img src="https://static.vecteezy.com/system/resources/thumbnails/005/908/808/small_2x/university-academy-school-and-course-logo-design-template-free-vector.jpg" style={{width:'60px',height:'60px',borderRadius:'50%',bottom:'40px'}}/>
    <div className="navcontact">
  
    <Treee to="/home">HOME</Treee>
    <Treee to="/adminad">ADMISSION DETAILS</Treee>
    {/* <Treee to="/adminfee">FEE DETAILS</Treee> */}
    <Link to="about" smooth={true} offset={200} duration={500}>ABOUT US</Link>
    <Link to="cont" smooth={true} offset={200} duration={500}>CONTACT US</Link>
    {/* <div class="dropdown"> */}
    {/* <button class="dropbtn">
    <div className="menuicon"></div>
    <div className="menuicon2"></div>
    <div className="menuicon3"></div>
    </button>
    <div class="dropdown-content"> */}
      
     {/* <Treee to="/ad">ADMISSION</Treee>
     <Treee to="/fee">FEES</Treee> 
     
      
      <a href="#">STATUS CHECK</a> */}
     
      </div>
      </div>
    
  

      
        
      
    )
    
}
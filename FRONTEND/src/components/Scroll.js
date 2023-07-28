import React from "react";
import {Link} from 'react-scroll'
import "./Scroll.css";
import About from "./About";
export default function Scroll(){
    return(
        <div>
        <div className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
        <li> 
        </li>
        <li><Link to="about" smooth={true} offset={200} duration={500}>CONTACT US</Link></li>
        
        </ul>
        </div>
        <main>
           
        <div className="content">
            <h1 className="content-header" id='contact'>CONTACT</h1>
            </div>
        
        </main>
        <div id='about'>
        <About/>
        </div>
        </div>
    )
    
}
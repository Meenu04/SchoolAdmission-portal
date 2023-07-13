import React from "react";
import "./Navbar.css";
export default function Navbar(){
    return(
        <div>
        <div className="nav">
        <a href="/" className="site-title">SCHOOL</a>
        <ul>
        <li> <a href="/ManageEmployee">ABOUT</a></li>
        <li> <a href="/AttendanceMangement">ADMISSION</a></li>
        <li> <a href="/AttendanceMangement">FEES</a></li>
        <li> <a href="/AttendanceMangement">ABOUT US</a></li>
        <li> <a href="/AttendanceMangement">CONTACT US</a></li>
        </ul>
        </div>
        </div>
    )
    
}
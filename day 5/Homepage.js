import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './gallery';
import Footer from './Footer';
function Homepage() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://images.pexels.com/photos/11367436/pexels-photo-11367436.jpeg?cs=srgb&dl=pexels-anil-sharma-11367436.jpg&fm=jpg','https://tgisraipur.com/img/slider_img_2.jpg','https://tgisraipur.com/images/library3.jpg'];
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
    
    // Render the current image
    return (
        <><><Navbar />
        
        <img src={images[index]} alt='Slide' style={{ width: '1600px', height: '700px', top: '50%', position: 'top 120px' }} /></>
        <><Gallery/></>
        <div id="about">
        <About />
        </div>
        <Footer/>
        </>
        );
}

export default Homepage;
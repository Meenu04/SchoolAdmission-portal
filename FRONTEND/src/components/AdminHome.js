import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import About from './About';
import Gallery from './gallery';
import Footer from './Footer';

function AdminHome() {
  // Create state variables for the index and image array
  const [index, setIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/11367436/pexels-photo-11367436.jpeg?cs=srgb&dl=pexels-anil-sharma-11367436.jpg&fm=jpg',
    'https://tgisraipur.com/img/slider_img_2.jpg',
    'https://tgisraipur.com/images/library3.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Render the current image
  return (
    <>
      <AdminNavbar />
      <div style={{ position: 'relative' }}>
        <img
          src={images[index]}
          alt='Slide'
          style={{ width: '1600px', height: '700px', top: '50%', position: 'top 120px' }}
        />
         <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(0, 0, 0)',
            background:'rgba(0, 0, 0, 0.5)' ,
            padding: '10px',
            borderRadius: '4px',
            width:'70%',
            color:'white'

          }}
        >  
          <h1 >Welcome to THE GREENHILLS PUBLIC SCHOOL, Sulthan Bathery.At the Core of our success is our never-ending pursuit to inspire excellence, cultivate character and empower engagement locally and globally.</h1>
    </div>
      </div>
      <Gallery />
      <div id="about">
        <About />
      </div>
      <div id="cont">
        <Footer />
      </div>
    </>
  );
}

export default AdminHome;



// import React, { useState, useEffect } from 'react';
// import AdminNavbar from './AdminNavbar';
// import About from './About';
// import Gallery from './gallery';
// import Footer from './Footer';

// function AdminHome() {
//   // Create state variables for the index and image array
//   const [index, setIndex] = useState(0);
//   const images = [
//     'https://images.pexels.com/photos/11367436/pexels-photo-11367436.jpeg?cs=srgb&dl=pexels-anil-sharma-11367436.jpg&fm=jpg',
//     'https://tgisraipur.com/img/slider_img_2.jpg',
//     'https://tgisraipur.com/images/library3.jpg'
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Render the current image
//   return (
//     <>
//       <AdminNavbar />
//       <div style={{ position: 'relative' }}>
//         <img
//           src={images[index]}
//           alt='Slide'
//           style={{
//             width: '100%', // Set the image width to 100% of its container
//             height: 'auto', // Allow the image to maintain its aspect ratio
//           }}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             top: '60%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             background: 'rgba(0, 0, 0, 0.5)',
//             padding: '10px',
//             borderRadius: '4px',
//             width: '70%',
//             color: 'white'
//           }}
//         >
//           <h1>
//             Welcome to THE GREENHILLS PUBLIC SCHOOL, Sulthan Bathery. At the Core of our success is our never-ending
//             pursuit to inspire excellence, cultivate character and empower engagement locally and globally.
//           </h1>
//         </div>
//       </div>
//       <Gallery />
//       <div id="about">
//         <About />
//       </div>
//       <div id="cont">
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default AdminHome;

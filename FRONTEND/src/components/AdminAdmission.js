import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminAdmission.css'; // Import the CSS file for styling
import AdminNavbar from './AdminNavbar'
import { Button,TextField,Box } from '@mui/material';
import {ImCross} from 'react-icons/im';
import { useNavigate} from 'react-router-dom';
function AdminAdmission() {
  const [shows, setShows] = useState([]);
  const[update,setupdate]=useState(false);
  const[fname,setFirstName]=useState('');
  const[lname,setLastName]=useState('');
  const[dob,setDateofbirth]=useState('');
  const[place,setbirthplace]=useState('');
  const[religion,setReligion]=useState('');
  const[nationality,setNation]=useState('');
  const[gender,setGender]=useState('');
  const[address,setAdd]=useState('');
  const[aadhar,setAadhar]=useState('');
  const[birth,setBirth]=useState('');
  const[doc,setDoc]=useState('');
  const navigate=useNavigate();
  
  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = () => {
    axios
      .get("http://localhost:8080/getad") // Replace with your backend URL
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const itemclick=(fname)=>{
    axios.delete(`http://localhost:8080/deletead/${fname}`)
    window.location.reload();
  };
 const handleupdate=()=>{
    setupdate(!update);
 };
 const handlesubmit= (e) => {
  e.preventDefault()
  axios.put("http://localhost:8080/putad",{
    fname:fname,
    lname:lname,
    dob:dob,
    place:place,
    religion:religion,
    nationality:nationality,
    gender:gender,
    address:address,
    aadhar:"234rfvbhjuy",
    birth:"iuhygtfrde",
    doc:"ijhg",
 

  }
    )
    .then((response)=>{
      console.log(response);
      navigate('/sts')
      
    })
    .catch((error)=>{
      console.error(error);
    });

};

  return (
    <><AdminNavbar /><div className="admin-admission-container">
      <h2>Admin Admission Details</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Place</th>
            <th>Religion</th>
            <th>Nationality</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Aadhar</th>
            <th>Birth</th>
            <th>Document</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show, index) => (
            <tr key={index}>
              <td>{show.fname}</td>
              <td>{show.lname}</td>
              <td>{show.dob}</td>
              <td>{show.place}</td>
              <td>{show.religion}</td>
              <td>{show.nationality}</td>
              <td>{show.gender}</td>
              <td>{show.address}</td>
              <td>{show.aadhar}</td>
              <td>{show.birth}</td>
              <td>{show.doc}</td>
              <td><button onClick={()=>itemclick(show.fname)}>delete</button></td>
              <td><button onClick={handleupdate}>update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {update  && 
      <div className="form-overlay">
      <div className ="form-container">
      <form onSubmit={handlesubmit} >
      <ImCross style={{color:'red',position:'relative',left:'240px',bottom:'15px',padding:'4px',fontSize:'20px' }} onClick={handleupdate} />
      <label>Pupil's First Name</label>
      
      <TextField id ="outlined-basic"   label="First Name" className='input-f'
      variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:0}}  value={fname} required  onChange={(e) => setFirstName( e.target.value)}/><br />
      
      <label>Pupil's Last Name</label>
      
      <TextField id ="outlined-basic"  label="Last Name" className='input-f'
      variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}} value={lname} required onChange={(e) => setLastName( e.target.value)}/><br />
      
      <label>Pupil's Date Of Birth</label>
      
      <TextField id ="outlined-basic"   className='input-f'
      variant="outlined" type="date" style={{backgroundColor:'gainsboro',border:'none'}}  value={dob} required  onChange={(e) => setDateofbirth( e.target.value)}/><br />
      
      <label>Birth Place</label>
      
      <TextField id ="outlined-basic"  label="Birth Place" className='input-f'
      variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}}  value={place} required onChange={(e) => setbirthplace( e.target.value)}/><br />
      
      <label>Regilion</label>
      
      <TextField id ="outlined-basic"  label="Religion" className='input-f'
      variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}}  value={religion} required onChange={(e) => setReligion( e.target.value)}/><br />
      
      <label>Nationality</label>
      
      <TextField id ="outlined-basic"  label="Nationality" className='input-f'
      variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}} value={nationality} required onChange={(e) => setNation( e.target.value)} /><br />
      
      <label>Gender</label>
      
      <TextField id ="outlined-basic"  label="gender" className='input-f'
      variant="outlined" type="select" style={{backgroundColor:'gainsboro',border:'none'}} value={gender}required  onChange={(e) => setGender( e.target.value)}/><br />
      
      <label>Address</label>
      
      <TextField id ="outlined-basic" label="full address" className='input-f'
      variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}}  value={address} required onChange={(e) => setAdd( e.target.value)}/><br />
      
      <label>Upload AAdhar</label>
      <br/>
      <TextField id ="outlined-basic"  className='input-f'
      variant="outlined" type="file" style={{backgroundColor:'gainsboro',border:'none'}}  value={aadhar} required onChange={(e) => setAadhar( e.target.value)}/><br />
      
      <label>Upload Birth Certificate</label>
      <br/>
      <TextField id ="outlined-basic"  className='input-f'
      variant="outlined" type="file"style={{backgroundColor:'gainsboro',border:'none'}}  value={birth} required onChange={(e) => setBirth( e.target.value)}/><br />
      
      <label>Upload Mark Sheets/Report Card</label>
      <br/>
      <TextField id ="outlined-basic"  className='input-f'
      variant="outlined" type="file"  style={{backgroundColor:'gainsboro',border:'none'}} value={doc} required onChange={(e) => setDoc( e.target.value)}/><br />
      <br/>
      

     
      
     
      
      <Box textAlign="center">
      <Button variant="contained" color="secondary" input type='submit'>Register</Button>
      </Box>
      
     
      </form>
      
       
    </div> 
    </div>
      }
     
    </div></>
  );
}

export default AdminAdmission;


// AdminAdmission.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminAdmission.css';
// import AdminNavbar from './AdminNavbar';
// import { Button, TextField, Box } from '@mui/material';
// import { ImCross } from 'react-icons/im';
// import { useNavigate } from 'react-router-dom';

// function AdminAdmission() {
//   const [shows, setShows] = useState([]);
//   const [update, setUpdate] = useState(false);
//   const [fname, setFirstName] = useState('');
//   const [lname, setLastName] = useState('');
//   const [dob, setDateOfBirth] = useState('');
//   const [place, setBirthPlace] = useState('');
//   const [religion, setReligion] = useState('');
//   const [nationality, setNationality] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [birth, setBirth] = useState('');
//   const [doc, setDoc] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchShows();
//   }, []);

//   const fetchShows = () => {
//     axios
//       .get('http://localhost:8080/getad') // Replace with your backend URL
//       .then((response) => {
//         setShows(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   const itemclick = (fname) => {
//     axios.delete(`http://localhost:8080/deletead/${fname}`);
//     window.location.reload();
//   };

//   const handleUpdate = () => {
//     setUpdate(!update);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put('http://localhost:8080/putad', {
//         fname: fname,
//         lname: lname,
//         dob: dob,
//         place: place,
//         religion: religion,
//         nationality: nationality,
//         gender: gender,
//         address: address,
//         aadhar: '234rfvbhjuy',
//         birth: 'iuhygtfrde',
//         doc: 'ijhg',
//       })
//       .then((response) => {
//         console.log(response);
//         navigate('/sts');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="admin-admission-container">
//         <h2>Admin Admission Details</h2>
//         <table className="admin-table">
//           <thead>
//             <tr>
//               {/* Table headers */}
//             </tr>
//           </thead>
//           <tbody>
//             {shows.map((show, index) => (
//               <tr key={index}>
//                 {/* Table rows */}
//                 <td>
//                   <button onClick={() => itemclick(show.fname)}>Delete</button>
//                 </td>
//                 <td>
//                   <button onClick={handleUpdate}>Update</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {update && (
//           <div className="form-overlay">
//             <div className="form-container">
//               <form onSubmit={handleSubmit}>
//                 {/* Form fields */}
//                 <Box textAlign="center">
//                   <Button variant="contained" color="secondary" type="submit">
//                     Register
//                   </Button>
//                 </Box>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default AdminAdmission;

import React from 'react'
import { Button,TextField,Box } from '@mui/material'
//import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import './Admission.css'
 function Admission() {
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
  const submitAd = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/post",{
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
        
      })
      .catch((error)=>{
        console.error(error);
      });

  };

  return (
    <div>
      <Navbar/>
                
      
        <form  className='admiss'onSubmit={submitAd}>
        <center>
        <h1><center>Admission Form</center></h1><br></br>
        <label>Pupil's First Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   label="First Name" className='input-f'
        variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:0}}  value={fname} required  onChange={(e) => setFirstName( e.target.value)}/><br />
        <br></br>
        <label>Pupil's Last Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Last Name" className='input-f'
        variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}} value={lname} required onChange={(e) => setLastName( e.target.value)}/><br />
        <br></br>
        <label>Pupil's Date Of Birth</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   className='input-f'
        variant="outlined" type="date" style={{backgroundColor:'gainsboro',border:'none'}}  value={dob} required  onChange={(e) => setDateofbirth( e.target.value)}/><br />
        <br></br>
        <label>Birth Place</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Birth Place" className='input-f'
        variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}}  value={place} required onChange={(e) => setbirthplace( e.target.value)}/><br />
        <br></br>
        <label>Regilion</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Religion" className='input-f'
        variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}}  value={religion} required onChange={(e) => setReligion( e.target.value)}/><br />
        <br></br>
        <label>Nationality</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Nationality" className='input-f'
        variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}} value={nationality} required onChange={(e) => setNation( e.target.value)} /><br />
        <br></br>
        <label>Gender</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="gender" className='input-f'
        variant="outlined" type="select" style={{backgroundColor:'gainsboro',border:'none'}} value={gender}required  onChange={(e) => setGender( e.target.value)}/><br />
        <br></br>
        <label>Address</label><br></br>
        <br></br>
        <TextField id ="outlined-basic" label="full address" className='input-f'
        variant="outlined" type="text" style={{backgroundColor:'gainsboro',border:'none'}}  value={address} required onChange={(e) => setAdd( e.target.value)}/><br />
        <br></br>
        <label>Upload AAdhar</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  className='input-f'
        variant="outlined" type="file" style={{backgroundColor:'gainsboro',border:'none'}}  value={aadhar} required onChange={(e) => setAadhar( e.target.value)}/><br />
        <br></br>
        <label>Upload Birth Certificate</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  className='input-f'
        variant="outlined" type="file"style={{backgroundColor:'gainsboro',border:'none'}}  value={birth} required onChange={(e) => setBirth( e.target.value)}/><br />
        <br></br>
        <label>Upload Mark Sheets/Report Card</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  className='input-f'
        variant="outlined" type="file"  style={{backgroundColor:'gainsboro',border:'none'}} value={doc} required onChange={(e) => setDoc( e.target.value)}/><br />
        <br></br>
        
        <br/>
        

        </center>
        
       
        
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >Register</Button>
        </Box>
        <br></br>
       
        </form>
       

    </div>
  )
}
export default Admission;
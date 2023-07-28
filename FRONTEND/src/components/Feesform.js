import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Final from './final';
import About from './About';
import Footer from './Footer';
import {useState} from "react";
import { useDispatch } from 'react-redux';
import Navbar from './Navbar'
import axios from "axios";
import {setUser} from './action'
function Feesform() {
    const navigate = useNavigate();
  
       
    
    const dispatch=useDispatch();
    const [std, setstd] = useState('');
    const[email,setemail]=useState('');
    const[name,setname]=useState('');
    const[rnumber,setrnumber]=useState(0);
    const submitfee = (e) => {
      e.preventDefault()
      axios.post("http://localhost:8080/ad",{
        name:name,
        mail:email,
        rollnum:rnumber,
        std:std,
        
      }
          )
          .then((response)=>{
            console.log(response);
            navigate('/open');
            dispatch(setUser(name));
            
          })
          .catch((error)=>{
            console.error(error);
          });
    
      };
    
return (
    <div>
        <Navbar/>
      <form  className='admiss'  >
        <center>
        <br></br>
       
        <TextField id ="outlined-basic"   label="Name" 
        variant="outlined" type="text" required value={name} onChange={(e) => setname( e.target.value)}/><br />
        <br></br>
       
        <br></br>
        <TextField id ="outlined-basic"  label="Email" 
        variant="outlined" type="text" required value={email} onChange={(e) => setemail(e.target.value)}/><br />
        <br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Roll Number" 
        variant="outlined" type="text" required value={rnumber} onChange={(e) => setrnumber( e.target.value)}/><br />
        <br></br>
        <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={std}
          label="class"
          autoWidth
          onChange={(e) => setstd( e.target.value)}
        >
          <MenuItem value={10}>I-10,000</MenuItem>
          <MenuItem value={21}>II-15,000</MenuItem>
          <MenuItem value={22}>III-20,000</MenuItem>
          <MenuItem value={22}>IV-25,000</MenuItem>
          <MenuItem value={22}>V-30,000</MenuItem>
          <MenuItem value={22}>VI-35,000</MenuItem>
          <MenuItem value={22}>VII-40,000</MenuItem>
          <MenuItem value={22}>VIII-35,000</MenuItem>
          <MenuItem value={22}>IX-30,000</MenuItem>
          <MenuItem value={22}>X-25,000</MenuItem>
          <MenuItem value={22}>XI-20,000</MenuItem>
          <MenuItem value={22}>XII-18,000</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br></br>
    <br></br>
        <Box textAlign="center">
       <Button variant="contained" color="secondary" input type='submit' onClick={submitfee}>PAY</Button>
        </Box>
       
        </center>
        </form>
        <div id="about"><About/></div>
       <div id="cont">
        <Footer/></div>
    </div>
  )
}

export default Feesform


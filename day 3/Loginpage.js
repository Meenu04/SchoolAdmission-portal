import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {useState} from "react";
import './Login.css'

export default function Loginpage() {
  const [password, setPassword] = useState('');
  const[errors,setErrors]=useState(' ');
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  const validateForm = () => {

      const errors = {};
      if (!password) {
          errors.password = 'Please enter a password.';
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters long.';
          setErrors(errors);

  return Object.keys(errors).length === 0;
        }
  }
  const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Perform login logic here
        console.log('Login successful');
      }
    };

  return (

    <div>
        <div class="split left">
  <div class="centered">
   
        <form  className='login' onSubmit={handleSubmit}>
        <center>
        <h1>Login</h1><br></br>
        <label>Email</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Password</label><br></br>
        <br></br>
        <div>
        <TextField id ="outlined-basic"  label="password" variant="outlined"
         type="password" required onChange={handlePasswordChange} value={password}/>{errors.password && <div style={{color:"red"}}>{errors.password}</div>}<br/></div>
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
       <Link to="/bar"> <Button variant="contained"  input type='submit'
         sx={{ color: 'yellow', backgroundColor: 'orange', borderColor: 'green' }} >LOGIN</Button></Link>
        </Box>
        <br></br>
        <br></br>
        <p><center>Don't have an Account? <Link to="/signup">Signup</Link></center></p>
        </form>
  </div>
</div>
<div class="split right">
  <div class="centered">
    <img src="https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?size=626&ext=jpg&ga=GA1.1.283105248.1688981036&semt=sph"/>
   
    
  </div>
</div>

    </div>
  )
}

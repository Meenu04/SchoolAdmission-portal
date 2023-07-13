import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './Signpage.css'
export default function Signpage() {
  return (
    <div>
         <div class="split right">
  <div class="centered">
   
        <form  className='signup'>
        <center>
        <h1>SignUp</h1><br></br>
        <label>Email</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Password</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <label class="form-label" for="customFile">Upload Aadhar</label>
            <input type="file" class="form-control" id="customFile" />
        <br></br>
        <label>Confirm Password</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="confirm" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        </center>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >SIGNUP</Button>
        </Box>
        <br></br>
        <br></br>
        
        <p><center>Have an Account? <Link to="/">Login</Link></center></p>
        </form>
        </div>
        </div>

  
      
    
    <div class="split left">
    <div class="centered">
      <img src="https://img.freepik.com/premium-vector/vector-seamless-pattern-school-doodle-back-school-icon-set-design-elements-poster-banner-vector-illustration_69626-368.jpg?size=626&ext=jpg&ga=GA1.1.283105248.1688981036&semt=ais"/>
      </div>
      </div>
      </div>
     
  )
}
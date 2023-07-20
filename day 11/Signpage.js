import React from 'react'
import { Button,TextField,Box } from '@mui/material'
 import { Link,useNavigate } from 'react-router-dom'
import  { useState } from 'react'

import './Signpage.css';
export default function Signpage() {
  const[name,setName]=useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate=useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
   
    

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match')
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long')
    } else {
      setPasswordError('password correct')
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    validatePassword();
    // Perform signup logic here if all fields are valid
    if (passwordError==='password correct') {
      // Perform signup logic
      // console.log("hii");
      navigate('/');
     
     
    }else{
      console.log("error")
    }
    axios.post("http://localhost:8080/add",{
      name:name,
      mail:mail,
      password:password,
      confirmPassword:confirmPassword,

    }
      )
  }

  return (
    <div>
         <div class="split right">
  <div class="centered">
  <form className='signup' onSubmit={handleSignUp}>
        <center>
          <h1>SignUp</h1>
          <br />
          <label>Name</label>
          <br />
          <br />
          <TextField id="outlined-basic" label="name" variant="outlined" type="text" required />
          <br />
          <br />
          <label>Email</label>
          <br />
          <br />
          <TextField id="outlined-basic" label="email" variant="outlined" type="email" required />
          <br />
          <br />
          <label>Password</label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label>Confirm Password</label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="confirm"
            variant="outlined"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </center>
        <br/>
        <Box textAlign="center">
          <Button variant="contained" color="secondary" type="submit" >
            SIGNUP
          </Button>
        </Box>
        <p>
          <center>
            Have an Account? <Link to="/">Login</Link>
          </center>
        </p>
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
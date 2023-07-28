import React from 'react'
import './First.css'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function First() {
  return (
    <div>
    <div className='first'>
    <h1 className='hi'><center>WELCOME TO NPM PUBLIC SCHOOL</center></h1>
         <h3 className='hello'><center>Admin Login</center></h3>
         <Box textAlign="center">
          <Link to="/adminlogin"><Button variant="contained" color="primary" type="submit" style={{width:"200px"}}>
            ADMIN
          </Button>
          </Link>
        </Box>
       
        <h3 className='hello'><center>User Login</center></h3>
         <Box textAlign="center">
         <Link to="/login"><Button variant="contained" color="primary" type="submit" style={{width:"200px"}}>
            USER
          </Button>
          </Link>
        </Box>
        </div>
    </div>
  )
}
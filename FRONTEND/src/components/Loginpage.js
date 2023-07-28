// import React from 'react'
// import { Button,TextField,Box } from '@mui/material'
//  import { Link } from 'react-router-dom'

// import './Login.css'

// export default function Loginpage() {
//  return (
//   <div className='cent'>
//         {/* <div class="split left"> */}
//   <div>
//   <div className='design'>
//       <Box
//         component="form"
//         noValidate
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: { sm: '1fr 1fr' },
//           gap: 2,
//         }}
//       ></Box>

//       <form className='login' action='http://localhost:3000/Home'>
//         <center>
//           <h1>Login</h1><br></br>
//           <label>USERNAME</label><br></br>
//           <br></br>
//           <TextField
//             id="outlined-basic"
//             label="username"
//             variant="outlined"
//             type="text"
//             required
//           /><br />
//           <label>Email</label><br></br>
//           <br></br>
//           <TextField
//             id="outlined-basic"
//             label="email"
//             variant="outlined"
//             type="email"
//             required
//           /><br />
//           <br></br>
//           <label>Password</label><br></br>
//           <br></br>
//           <TextField
//             id="outlined-basic"
//             label="password"
//             variant="outlined"
//             type="password"
//             pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
//             title="Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long"
//             required
//           /><br />
//           <br></br>
//           <br></br>
//         </center>
//         <Box textAlign="center">
//           <Button variant="contained" color="secondary" type='submit' >LOGIN</Button>
//         </Box>
//         <br></br>

//         <p><center>Don't have an Account? <Link to="/signup">Signup</Link></center></p>
//       </form>
//     </div>
//         </div>
//         </div>
// /* <div class="split right">
//   <div class="centered">
//     <img src="https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?size=626&ext=jpg&ga=GA1.1.283105248.1688981036&semt=sph"/>
   
    
//   </div>
// </div> */

   
//   )
// }


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [username, setUsername] = useState('');

//   const handleLogin = () => {
//     // Your login logic here...

//     // After successful login, set the username and navigate to the homepage
//     navigate('/homepage', { state: { username } });
//   };

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Enter your username"
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginPage;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button,TextField,Box } from '@mui/material'

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Your login logic here...

//     // After successful login, navigate to the homepage with the username as state
//     navigate('/homepage', { state: { username } });
//   };

//   return (
//     <div className='cent'>
//       <div className='design'>
//         <form className='login' onSubmit={handleLogin}>
//           <center>
//             <h1>Login</h1>
//             <br />
//             <label>USERNAME</label>
//             <br />
//             <br />
//             <TextField
//               id='outlined-basic'
//               label='username'
//               variant='outlined'
//               type='text'
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <br />
//             <label>Email</label>
//             <br />
//             <br />
//             <TextField
//               id='outlined-basic'
//               label='email'
//               variant='outlined'
//               type='email'
//               required
//             />
//             <br />
//             <br />
//             <label>Password</label>
//             <br />
//             <br />
//             <TextField
//               id='outlined-basic'
//               label='password'
//               variant='outlined'
//               type='password'
//               pattern='(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}'
//               title='Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long'
//               required
//             />
//             <br />
//             <br />
//             <br />
//           </center>
//           <Box textAlign='center'>
//             <Button variant='contained' color='secondary' type='submit'>
//               LOGIN
//             </Button>
//           </Box>
//           <br />
//           <p>
//             <center>
//               Don't have an Account? <Link to='/signup'>Signup</Link>
//             </center>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button,TextField,Box } from '@mui/material'

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Your login logic here...

    // After successful login, navigate to the homepage with the username as state
    navigate('/home', { state: { username: username } });
  };

  return (
    <div className='cent'>
      <div className='design'>
        <form className='login' onSubmit={handleLogin}>
          <center>
            <h1>Login</h1>
            <br />
            <label>USERNAME</label>
            <br />
            <br />
            <TextField
              id='outlined-basic'
              label='username'
              variant='outlined'
              type='text'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Email</label>
            <br />
            <br />
            <TextField
              id='outlined-basic'
              label='email'
              variant='outlined'
              type='email'
              required
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <br />
            <TextField
              id='outlined-basic'
              label='password'
              variant='outlined'
              type='password'
              pattern='(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}'
              title='Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long'
              required
            />
            <br />
            <br />
            <br />
          </center>
          <Box textAlign='center'>
            <Button variant='contained' color='secondary' type='submit' style={{width:'100px'}}>
              LOGIN
            </Button>
          </Box>
          <br />
          <p>
            <center>
              Don't have an Account? <Link to='/signup'>Signup</Link>
            </center>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

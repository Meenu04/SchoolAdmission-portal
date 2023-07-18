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

import Navbar from './Navbar'
function Feesform() {
    // const navigate = useNavigate();
    // const navigateHome = () => {
       
    //     navigate('/final');
    //   };
      const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <Navbar/>
      <form  className='admiss'>
        <center>
        <br></br>
       
        <TextField id ="outlined-basic"   label="Name" 
        variant="outlined" type="text" required /><br />
        <br></br>
       
        <br></br>
        <TextField id ="outlined-basic"  label="Email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="Roll Number" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Class"
          autoWidth
          onChange={handleChange}
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
        <Link to="/open"><Button variant="contained" color="secondary" input type='submit' >PAY</Button></Link>
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


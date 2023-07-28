
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './components/Loginpage';
import Signpage from './components/Signpage';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Admission from './components/Admission';
import Feesform from './components/Feesform';
import Final from './components/final';
import Open from './components/open';
import Primary from './components/Primary';
import Highschool from './components/Highschool';
import HigherSec from './components/HigherSec';
import AdminAdmission from './components/AdminAdmission';
import AdminFee from './components/AdminFee';
import AdminHome from './components/AdminHome';
import First from './components/First';
import AdminLogin from './components/AdminLogin';

import StatusCheck from './components/StatusCheck';
import { Provider } from 'react-redux';
import store from './components/store';
import FeedBack from './components/feedback';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<First/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signup" element={<Signpage />}/>
      <Route path="/bar" element={<Navbar/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/ad" element={<Admission/>}/>
      <Route path="/prim" element={<Primary/>}/>
      <Route path="/high" element={<Highschool/>}/>
      <Route path="/higher" element={<HigherSec/>}/>
      <Route path="/adminad" element={<AdminAdmission/>}/>
      <Route path="/adminfee" element={<AdminFee/>}/>
      <Route path="/adminhome" element={<AdminHome/>}/>
      
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/fin" element={<Final/>}/>
      <Route path="/feed" element={<FeedBack/>}/>
      
      <Route path="/fee" element={<Feesform/>}/>
      <Route path="/sts" element={<StatusCheck/>}/>
      <Route path="/open" element={<Open/>}/>
      
    </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;

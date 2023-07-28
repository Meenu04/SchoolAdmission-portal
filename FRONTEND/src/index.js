import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

 import App from './App';
import Admission from './components/Admission';
import Gallery from './components/gallery';
import Footer from './components/Footer';
import Feesform from './components/Feesform';
import Pdf from './components/pdf';
import Final from './components/final';
import Open from './components/open';
import Payment from './components/open';
import Primary from './components/Primary';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

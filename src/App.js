
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const shiftMode =()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <div>      
      <Navbar Title="TextUtils" About="About TextUtils" mode ={mode} shiftMode ={shiftMode}/>
      <div className="container">
        <TextForm heading="Enter text to Analyze" mode ={mode}/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;

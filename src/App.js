
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
       setAlert(null);
    }, 2000);

  }

  const shiftMode =()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode is enabled!","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled!","success");
    }
    
  }
  return (
    <div>      
      <Navbar Title="TextUtils" About="About TextUtils" mode ={mode} shiftMode ={shiftMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter text to Analyze" showAlert={showAlert} mode ={mode}/>
        {/* <About/> */}

      </div>
    </div>
  );
}

export default App;

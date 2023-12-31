import './App.css';
import Alert from './Components/Alert';
import About from './Components/About'; 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);

    }, 2000);

  }


  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextEdits - Dark Mode";
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextEdits - Light Mode";

    }
    

  }
  return (
    <>
    <Router>
     <Navbar title="TextEdits" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          </Routes>
     </div>
     </Router>
     
    </>
  );
}

export default App;

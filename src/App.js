import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
const [mode, setMode] = useState("light");

const [alert , setAlert] = useState(null);


const showAlert = (message, type)=>{
   // eslint-disable-next-line
 
  setAlert ({
    msg:message,
    type:type
  });
  
 // eslint-disable-next-line
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode = () =>{
  //  (mode === "light" ? setMode("dark"): setMode("light"))
  //  (mode === "light" ? document.body.style.backgroundColor="#002D62": document.body.style.backgroundColor="white")
  //  (mode === "light" ? showAlert("Dark mode has been enabled", "success"): showAlert("Light mode has been enabled", "success"))
if (mode === "light"){
  setMode("dark");
  document.body.style.backgroundColor="#002D62";
  showAlert("Dark mode has been enabled", "success");

}
else{
  setMode("light");
  document.body.style.backgroundColor="white"
  showAlert("Light mode has been enabled", "success")
}

}
  return (
    <>
   
    
       
   
   <BrowserRouter>
   <Navbar title="TextConverter'" mode={mode}  toggleMode = {toggleMode}/>
    <Alerts alert ={alert}></Alerts>
    <div className='container my-3'>
    <Routes>
       
        <Route exact path ="/about"  element={<About mode={mode}/>}></Route>
            <Route exact path ="/" element={<TextForm showAlert ={showAlert} heading="Enter your text here for analysis " mode={mode} />}></Route> 
    
          
         </Routes>
         </div>
        </BrowserRouter>
        
  
    </>
  

  );
}

export default App;

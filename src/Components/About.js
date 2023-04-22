// import React, { useState } from 'react'
import React from 'react'


export default function  About(props) {

//    const [mystyle, setmystyle] = useState(
//   {
//   color:"black",
//   backgroundColor:"white",
//   padding:"10px",
//   borderRadius:"10px"
//  })

//  const [myText, setMytext] = useState("Enable Dark Mode")
//   const handleDark =() =>{
//     (mystyle.color === "white" ? setmystyle({color:"black", backgroundColor:"white"}):setmystyle({color:"white", backgroundColor:"black"}));
//     (myText === "Enable Dark Mode" ? setMytext("Enable Light Mode"): setMytext("Enable Dark Mode"));
// }


let myStyle = {
padding:'20px',
margin:' 10px auto ',
  color:props.mode === 'dark'? 'white':'#002D62',
  backgroundColor:props.mode === 'dark'? '#002D62':'white',
}

  return (

    <div className='container my-4' style={myStyle}>
      <h1>About Us</h1>
    <div className="accordion my-3" id="accordionExample">
  <div className="accordion-item p-0" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button my-4 mx-auto" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is TextConverter ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>TextConverter is online Web application that help you to play with the text. TextConverter helps you to Make your Text (Uppercase, Lowercase, Make 1st Letter Capital, Remove extra spaces from text!!! Our application also help you to measure Number of Words & Characters present in your paragraph, also show the Reading time for the paragraph) </strong>
      </div>
    </div>
  </div>
    </div>
   

    {/* <button className="btn btn-dark mx-2 my-2" onClick={handleDark}>{myText}</button> */}
    </div>
  )
}

import React, { useState } from 'react'

export default function TextForm(props) {

const handleUpclick = ()=>{
   // console.log("uppertext was clicked");
    let Newtext = text.toUpperCase();
    setText(Newtext)
    props.showAlert("Converted to Uppercase" , "success")
}

const handleLowclick = ()=>{
  // console.log("uppertext was clicked");
   let NewLowertext = text.toLowerCase();
   setText(NewLowertext)
   props.showAlert("Converted to Lowercase" , "success")
}


const handlecapclick = () => {

   let Newcaptext = text.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
   setText(Newcaptext)
   props.showAlert("Converted to Capital" , "success")
  };


const handleonChange = (event)=>{
   // console.log("change");
    setText(event.target.value);
}

const handleCopy = ()=>{
  var text = document.getElementById("mytext");
  text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Text Copied" , "success")
}

const handleSpaces = ()=>{
 let newText = text.split(/[  {2}]+/)
 setText(newText.join(" "))
 props.showAlert("Spaces Removed" , "success")
}

const handleReset = ()=>{
  let ResetText = "";
  setText(ResetText)
  props.showAlert("Reset Successsful" , "success")
}
const [text, setText] = useState("")
  return (
    <>

    <div className='container my-3' style={{color:props.mode === "dark" ? "white":"black"}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  {/* <label htmlFor="mytext" className="form-label">Enter Your Text </label> */}
  <textarea className="form-control" value={text} onChange={handleonChange}  style={{backgroundColor:props.mode === "dark" ? "#002D62":"white", color:props.mode === "dark" ? "white":"black"}} id="mytext" rows="6"></textarea>
</div>
<button  disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>Convert to Lowercase</button>
<button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecapclick}>Convert to Capitalize</button>
<button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Spaces</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleReset}>Reset</button>
</div>
<div className='container my-3' style={{color:props.mode === "dark" ? "white":"black"}}>
  <h1>Your text Summary</h1>
  <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} : Words and {text.length} : Characters </p>
  <p> { 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} :Minutes Read</p>
  <h1>Preview:</h1>
  <h2>{text.length > 0 ? text : "Enter the text in Textarea to preview it"}</h2>
</div>
    </>
  )
}

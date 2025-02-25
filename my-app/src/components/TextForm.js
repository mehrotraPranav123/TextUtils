import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  }
  const handleLoClick = () =>{
    console.log("Lowercase was clicked");
    let newtext2 = text.toLowerCase();
    setText(newtext2);
    props.showAlert("Converted to lowercase!","success")
  }
  const handleOnChange = (event)=>{
    console.log("On change")
    setText(event.target.value)
  }


  const handleClear = () => {
    console.log("Text is clear")
    setText("")
    props.showAlert("Text Cleared!","success")
  }

  const handleCopy = ()=>{
    console.log("Copied text")
    let textArea = document.getElementById("myBox")
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("text copied!","success")
  }

  const handleExtraSpaces = ()=>{
    let newText4 = text.split(/[ ]+/)
    setText(newText4.join(" "))
    props.showAlert("extra","success")
  }

  const[text,setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#343a40'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
      
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
        color: props.mode === 'dark'?'white':'#343a40'}} id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>

    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>

    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>

    <button id='my-Box' className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy</button>

    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Clear Extra Space</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#343a40'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter your text to preview"}</p>

    </div>
    
    </>
  )
 
}



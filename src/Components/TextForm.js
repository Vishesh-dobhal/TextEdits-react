import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("converted to lowercase!","success");
   }
   const handleClearClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
     let newText = '';
     setText(newText)
     props.showAlert("clear text!","success");
   }
  const handleOnChange =(event)=> {
    //console.log("on change");
    setText(event.target.value)
  }

  const handleCopy = ()=> {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipbord!","success");
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra space removed!","success");
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#8CBED6':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
       <button className="btn btn-primary my-2" onClick={handleClearClick}> Clear</button>
       <button className="btn btn-primary my-2 mx-2 " onClick={handleCopy}> Copy Text</button>
       <button className="btn btn-primary my-2 mx-2 " onClick={handleExtraSpaces}> Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Charachters</p>
      <p>{0.008 * text.split(" ").length}Minutes read </p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter somethingin the textbox above to preview it !"}</p>

    </div>
    </>
  )
}


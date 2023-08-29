import React, { useState } from "react";       //useState is hooks

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked" + text);
    const textupper = text.toUpperCase();
    setText(textupper);
    props.showAlert("Converted to UpperCase","success")           //alert has been passed here from alert.js
  };
  const handleLoClick = () => {
    // console.log("lowerCase was Clicked" + text);
    const textlower = text.toLowerCase();
    setText(textlower);
    props.showAlert("Converted to LowerCase","success")           //alert has been passed here from alert.js
  };
  const handleClearClick = () => {
    const textupper =""
    setText(textupper);
    props.showAlert("Text has been Cleared","success")            //alert has been passed here from alert.js
  };
  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
   
    props.showAlert("Copied to Clipboard","success")                        //alert has been passed here from alert.js
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <div>
          <h2 className="mb-2 my-2" >{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              value={text}          //it must be set first 
              onChange={handleOnChange}
              rows="8"
              
              style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='dark'?'white':'#042743'}}
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary </h2>
        <p>
          Contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}

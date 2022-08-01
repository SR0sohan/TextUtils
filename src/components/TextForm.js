import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUp = () =>{
        // console.log("handle up is clicked: + text");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    
    }
    const handlelow = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase", "success")
    }
    const handlclear =() =>{
      let newText= '';
      setText(newText)
      props.showAlert("Text is Cleared!", "success")
    }
    const handlReverse =() =>{
      let newText = text.split("").reverse().join("");
      setText(newText)
      props.showAlert("Text is Reversed!", "success")
    }
    const handlcopy=() =>{
        let text =document.getElementById("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied!", "success")

    }
    const handleExSpaces =()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces gone!", "success")
    }

    const handleChange = (event) =>{
        // console.log('change is happening');
        setText(event.target.value)
    }

    const [text, setText] =useState('Enter text here')
    
  return (
    <div >
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 className="mt-5">{props.heading}</h1>
          <div className="mt-4">
          <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'gray':'white'}} id="Textarea" rows="8"></textarea>
          </div>
          <button type="button" onClick={handleUp} className="btn btn-success mt-3">Convert To Uppercase</button>
          <button type="button" onClick={handlelow} className="btn btn-success mt-3 ms-3">Convert To Lowercase</button>
          <button type="button" onClick={handlReverse} className="btn btn-success mt-3 ms-3">Reverse your text</button>
          <button type="button" onClick={handleExSpaces} className="btn btn-success mt-3 ms-3">Remove Extra Spaces</button>
          <button type="button" onClick={handlcopy} className="btn btn-success mt-3 ms-3">Copy Text</button>
          <button type="button" onClick={handlclear} className="btn btn-success mt-3 ms-3">Clear Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Preview</h2>
          <p>{text.split(" ").length} words and {text.length} characters.</p>
          <p>Approximately {0.08 * text.split(" ").length} muinutes to read.</p>
          <h3>Summary</h3>
          <p>{text.length>0?text:'Enter some text avobe to preview here.'}</p>
      </div>
    </div>
  )
}

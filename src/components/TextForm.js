import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUp = () =>{
        // console.log("handle up is clicked: + text");
        let newText = text.toUpperCase();
        setText(newText)
    
    }
    const handlelow = () =>{
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handlclear =() =>{
      let newText= '';
      setText(newText)
    }
    const handlReverse =() =>{
      let newText = text.split("").reverse().join("");
      setText(newText)
    }

    const handleChange = (event) =>{
        // console.log('change is happening');
        setText(event.target.value)
    }

    const [text, setText] =useState('Enter text here')
  return (
    <>
      <div className='container'>
          <h1 className="mt-5">{props.heading}</h1>
          <div className="mt-4">
          <textarea className="form-control" value={text} onChange={handleChange} id="Textarea" rows="8"></textarea>
          </div>
          <button type="button" onClick={handleUp} className="btn btn-success mt-3">Convert To Uppercase</button>
          <button type="button" onClick={handlelow} className="btn btn-success mt-3 ms-3">Convert To Lowercase</button>
          <button type="button" onClick={handlReverse} className="btn btn-success mt-3 ms-3">Reverse your text</button>
          <button type="button" onClick={handlclear} className="btn btn-success mt-3 ms-3">Clear</button>
      </div>
      <div className="dontainer my-3">
          <h2>Preview</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>Approximately {0.08 * text.split(" ").length} muinutes to read.</p>
          <h3>Summary</h3>
          <p>{text}</p>
      </div>
    </>
  )
}

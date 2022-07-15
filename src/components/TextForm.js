import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUp = () =>{
        // console.log("handle up is clicked: + text");
        let newText = text.toUpperCase();
        setText(newText)
    
    }

    const handleChange = (event) =>{
        // console.log('change is happening');
        setText(event.target.value)
    }

    const [text, setText] =useState('Enter text here')
  return (
    <div>
        <h1 className="mt-5">{props.heading}</h1>
        <div className="mt-4">
        <textarea className="form-control" value={text} onChange={handleChange} id="Textarea" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUp} className="btn btn-success mt-3">Convert To Uppercase</button>
    </div>
  )
}

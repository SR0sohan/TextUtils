import React from 'react'


export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color:'Black',
    //     backgroundColor: 'White'
    // })
    // const [btntext, setBtntxt] =useState("Enable Dark Mode")
    // const ColorShift =()=>{
    //     if(mystyle.color === 'Black'){
    //         setMystyle({
    //             color:'White',
    //             backgroundColor: ' Black'
    //         })
    //         setBtntxt("Enable Light Mode")
    //     }
    //     else{
    //         setMystyle({
    //             color:'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntxt("Enable Dark Mode")
    //     }

    // } 
    
    let mystyle ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'gray':'white'
    }
    

  return (
    <div className='container pt-1 pb-5' >
        <h2 style={{color:props.mode === 'dark'?'white':'black'}}>About Us</h2>
            <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        {/* <button onClick={ColorShift} type="button" className="btn btn-success mt-4">{btntext}</button> */}
        </div>
    </div>
  )
}

import React from 'react'

function Alert(props) {
  // const capitalize = (word)=>{
  //   let lower = word.toLowercase();
  //   return lower.charAt(0).toUppercase() + lower.slice(1);
  // }
  return (
    <div style={{height:'50px'}}>
    {  props.alert&&
      <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
          <strong>{props.alert.type}</strong>: {props.alert.msg}       
        </div>
      </div>}
    </div>
  )
}

export default Alert

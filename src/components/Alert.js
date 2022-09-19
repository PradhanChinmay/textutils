import React from 'react'

export default function Alert(props) {

  const capitalise = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }  

  const myStyle = {
    transition: 'all ease-in-out 0.5s'
  }

  return (
    <div style={{height : '50px'}}>
      {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={myStyle} role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      }
    </div>
  )
}

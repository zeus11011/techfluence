import React from 'react'
import "./Box.scss";


function Box({img , text }) {
  return (
    <div className='box'>
        <img src={img} />
        <h1>{text}</h1>
    </div>
  )
}

export default Box
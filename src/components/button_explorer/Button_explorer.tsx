import React from 'react'
import "./Button_explorer.css"
 
export default function Button_explorer() {
  return (

        <button type="button" className="btn_see_proj ">
        <strong className='strong'>EXPLORAR</strong>
        <div id="container-stars">
            <div id="stars"></div>
        </div>

        <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        </button>

  )
} 

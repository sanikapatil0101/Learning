import { useState } from 'react'
import './App.css'

function App() {

  function handleClick (){
    alert("I am Clicked")
  }

  function handleMouseover(){
    alert("Mouse on para")
  }

  return (
    <>
    <button onClick={handleClick}>
      click me
    </button>

    <p onMouseOver={handleMouseover}>
      I am para
    </p>
      
        
    </>
  )
}

export default App

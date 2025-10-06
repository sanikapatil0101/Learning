import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
// first => side effect function
// second => clean-up function
// third => comma seperated dependency list
function App() {

  const [count,setCount] = useState(0)
  // useEffect(()=>{

  //   first 

  //   return ()=>{
  //     second
  //   }
  
  // },[third])

// run on each render
  // useEffect (()=>{
  //   alert("This program will run on each render")
  // })

// run on first render only
  // useEffect (()=>{
  //   alert("This program will run on only first render")
  // },[])

// run when count updates initialy also 0 is considered as update 
  //  useEffect (()=>{
  //   alert("This program will run on every update in count")
  // },[count])

  function handleClick (){
    setCount(count+1)
  }



  return (
    <>
    <button onClick={handleClick}>
      click me
    </button>
    <p>count is : {count}</p>
      
    </>
  )
}

export default App

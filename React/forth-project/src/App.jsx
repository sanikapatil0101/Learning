import React,{useState} from 'react'
import Card from './components/Card'
function App() {
  //create state manage state and synchronize with child
  const [name, setName] =useState ('')

  return (
    <div>
    <Card name ={name} setName={setName}/>
    <Card name ={name} setName={setName}/>
     
    </div>
  )
}

export default App

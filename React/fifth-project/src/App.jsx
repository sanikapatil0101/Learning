import { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import './App.css'

function App() {
  const [loggedin, setLoggedin] = useState(true)

  if(!loggedin){
    return(
      <div>
        <h1>Please Login</h1>
        <div>
          <Login/>
        </div>
      </div>
      
    )
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        {loggedin && <Logout/>}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {loggedin ? <Logout/> : <Login/>}
  //   </div>
  // )

  // if(loggedin){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   <Login/>
  // }
}

export default App

import { createContext, useState } from 'react'
import Child1 from './components/Child1'

// step 1: create context

const UserContext = createContext();

// Step 2: Wrap all the child inside a provider
// Step 3: Pass the value
// Step 4: Consume by Consumer

function App() {
  const [user,setUser] = useState({name: "Sanika"})
  return (
    <>
    <h1>
      <UserContext.Provider value={user}>
      <Child1/>
      </UserContext.Provider>
    </h1>
      
    </>
  )
}

export default App
export {UserContext}
import React,{useContext} from 'react'
import { UserContext } from '../App'

const Child3 = () => {
  const user = useContext(UserContext)
  return (
    <div>
        data: {user.name}
    </div>
  )
}

export default Child3

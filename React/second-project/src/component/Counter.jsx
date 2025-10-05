import React ,{useState}from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='counter-comtainer'>
      <p id='para'>Count Button {count} time Clicked</p>
      <button id='btn' onClick={()=> {setCount(count+1)}}>count</button>
    </div>
  )
}

export default Counter

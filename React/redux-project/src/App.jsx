import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment,incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';
function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount,setAmount] = useState(0)

  

  function handelIncrementClick(){
    dispatch(increment())

  }

  function handelDecrementClick(){
    dispatch(decrement())
  }

  function handelIncrementByAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
    
      

        <div>
          <button onClick={handelIncrementClick}>+</button>
          <p>Count: {count}</p>
          <button onClick={handelDecrementClick}>-</button>
          <br/>
          <br/>
          <input type='Number' 
          value={amount} 
          onChange={(e)=>setAmount(e.target.value)}/>
          <button onClick={handelIncrementByAmountClick}>Add Amount</button>
        </div>
    </>
  )
}

export default App

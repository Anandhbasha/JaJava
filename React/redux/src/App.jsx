import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/Slice'
import New from './New'

const App = () => {
  const states = useSelector((state)=>state.count.countes)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <p>{states}</p>
      <button onClick={()=>dispatch(increment(1))}>Add</button>
      <button onClick={()=>dispatch(decrement(1))}>Minus</button>
      <New/>
    </div>
  )
}

export default App
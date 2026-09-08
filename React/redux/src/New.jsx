import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/Slice'

 
const New = () => {
    const states = useSelector((state)=>state.count.countes)
    const dispatch = useDispatch()
  return (
    <div className='New'>
        <p>{states}</p>
        <button onClick={()=>dispatch(increment(1))}>Add</button>
        <button onClick={()=>dispatch(decrement(1))}>Minus</button>
    </div>
  )
}

export default New
import React, { useState } from 'react'

const App = () => {
  const [bg,setBg] = useState("dark")
  const bgChange =()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <div className='App' style={{width:"100%",height:"100vh",backgroundColor:bg==="dark"?"black":"white"}}>
      <button onClick={bgChange}>{bg}</button>
      <select>
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
      <input type='text' placeholder='search here'></input>
    </div>
  )
}

export default App
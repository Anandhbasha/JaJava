// import { useEffect, useState } from "react"

// const App = ()=>{
//   const[count,setCount] = useState(0)
//   useEffect(()=>{
//     console.log("Welcome to useEffect");    
//   },[])
//   // while render this component it will work once automatically
//   return(
//     <div className="App">
//       <p>{count}</p>
//       <button onClick={()=>setCount((prev)=>++prev)}>Add</button>
//     </div>
//   )
// }
// export default App



// npm i react-router-dom

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Jewellery from './Pages/Jewellery/Jewellery'
import Electronics from './Pages/Electronics/Electronics'
import Womens from './Pages/Womens/Womens'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/jewles' element={<Jewellery/>}/>
        <Route path='/electro' element={<Electronics/>}/>
        <Route path='/womens' element={<Womens/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
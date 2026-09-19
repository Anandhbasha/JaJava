import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Jewllery from './Pages/Jewllery/Jewllery'
import Electronics from './Pages/Electronics/Electronics'
import Womens from './Pages/Womens/Womens'
import "./App.css"

export const PassValue = createContext()
const App = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
        const res = await axios.get("https://fakestoreapi.com/products")
        if(!res){
          throw Error("Unable to connect the API")
        }
        else{
          setProducts(await res.data)
        }
    }
    fetchData()
  },[])
  return (
    <BrowserRouter>
      <PassValue.Provider value={{products}}>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<AllProducts/>} />
          <Route path='/mens' element={<Mens/>} />
          <Route path='/jewellery' element={<Jewllery/>} />
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/womens' element={<Womens/>} />
        </Routes>
      </PassValue.Provider>
    </BrowserRouter>
  )
}

export default App
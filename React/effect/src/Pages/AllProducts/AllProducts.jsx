import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import "./AllProducts.css"

const AllProducts = () => {
  const[products,setProducts] = useState([])
  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const res = await fetch("https://fakestoreapi.com/products")
        if(res.ok){
            setProducts(await res.json())
        }
        else{
          throw Error("Unable to connect API ");
          
        }
      }
      catch(err){
        console.log(err);
        
      }
    }
    fetchProduct()
  },[])
  console.log(products);
  
  return (
    <div className='AllProducts'>
      {products.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default AllProducts
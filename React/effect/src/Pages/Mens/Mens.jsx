import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import "./Mens.css"

const Mens = () => {
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
    <div className='Mens'>
      {products.filter((item)=>
        item.category=="men's clothing"
      ).map((x)=>(
        <Card {...x}/>
      ))}
    </div>
  )
}

export default Mens
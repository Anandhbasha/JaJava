import React, { useContext } from 'react'
import "./Card.css"
import { PassingValue } from '../../App'

const Card = ({title,price,image,id,description}) => {
    const {count,setCount} = useContext(PassingValue) 
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={image}></img>
        </div>
        <div className='cardDetails'>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
        <div className='cardBtm'>
            <button onClick={()=>setCount((prev)=>++prev)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card
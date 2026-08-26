import React from 'react'
import "./Card.css"

const Card = ({title,price,image,id,description}) => {
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
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card
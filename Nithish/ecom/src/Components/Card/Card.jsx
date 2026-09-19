import React from 'react'
import "./Card.css"
const Card = ({image,title,price,description,category}) => {
  return (
    <div className='Card'>
      <div className='cardImage'>
        <img src={image}></img>
      </div>
      <div className='prodDetails'>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <p>{description}</p>
      </div>
      <div className='cardBtm'>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Card
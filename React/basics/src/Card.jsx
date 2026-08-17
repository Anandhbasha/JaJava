import React from 'react'
import "./Card.css"

const Card = ({title,price,description,image}) => {
  return (
    <div className='Card'>
        <div className='cardImage'>
            <img src={image}></img>
        </div>
        <div className='prodInfo'>
            <h2>{price}</h2>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className='cardBtm'>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}


export default Card
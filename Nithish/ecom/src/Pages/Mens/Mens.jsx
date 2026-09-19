import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassValue } from '../../App'

const Mens = () => {
  const {products} = useContext(PassValue)
  const mensProd = products.filter((item)=>item.category==="men's clothing")
  return (
    <div className='Cards'>
        {mensProd.map((item)=>(
          <Card {...item}/>
        ))}
    </div>
  )
}

export default Mens
import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { PassValue } from '../../App'

const AllProducts = () => {
  const {products} = useContext(PassValue)
  return (
    <div className='Cards'>
        {products.map((x)=>(
          <Card {...x}/>
        ))}
    </div>
  )
}

export default AllProducts
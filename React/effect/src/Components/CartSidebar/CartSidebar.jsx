import React from 'react'

const CartSidebar = () => {
  return (
    <div className='CartSidebar' style={{display:"flex",gap:"15px"}} >
        <h2 style={{color:"purple"}}>Cart is Empty</h2>
        <div className='close' style={{display:"flex",justifyContent:"center",alignItems:"center",width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"grey",color:"white"}}>
            <i class="fa-solid fa-xmark"></i>
        </div>
        
    </div>
  )
}

export default CartSidebar
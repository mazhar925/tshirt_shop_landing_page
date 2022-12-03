import React from 'react'

export default function Cart({cart, removeCart}) {
  return (
    <div>
        <h2>Order Summary</h2>
        {
            cart.map(product=> <p>{product.name}<button onClick={()=>{removeCart(cart._id)}}>x</button></p>)
        }
    </div>
  )
}

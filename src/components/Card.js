import React from 'react'
import './Card.css'

export default function Card({product, handleAddToCart}) {
    const {name, picture, price} = product;
  return (
    <div className='card'>
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <button onClick={()=>{handleAddToCart(product)}}>Buy this</button>
    </div>
  )
}

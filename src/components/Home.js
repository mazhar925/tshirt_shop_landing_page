import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card';
import Cart from './Cart';
import './Home.css'

export default function Home() {
  const data = useLoaderData();
  const [cart, setCart] = useState([])
  const handleAddToCart = shirt => {
    const exist = cart.find(ts => ts._id === shirt._id)
    if(exist){
      alert('exist')
    }
    else{
      const newCart = [...cart, shirt];
      setCart(newCart);
    }
  }
  const removeCart = shirt =>{
    const remainning = cart.filter(dat => dat._id !== shirt._id);
    setCart(remainning); 
  }
  return (
    <div className='home-container'>
      <div className='card-container'>
      {
        data.map(product => <Card key={product._id} handleAddToCart={handleAddToCart} product={product}></Card>)
      }
    </div>
    <div className='cart-container'>
      <Cart key={cart._id} cart={cart} removeCart={removeCart}></Cart>
    </div>
    </div>
  )
}

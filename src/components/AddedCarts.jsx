import React from 'react'
import AddedCart from './AddedCart'

const AddedCarts = ({cart,setCart,delayCount,setDelayCount}) => {
  return (
    <article className='added-carts-container'>
      {cart.map(item => (
        <AddedCart 
        key={item.id}
        setDelayCount={setDelayCount}
        delayCount={delayCount} 
        cart={cart} 
        setCart={setCart} 
        item={item} />
      ))}
    </article>
  )
}

export default AddedCarts
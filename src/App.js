import React, { useState } from 'react';
import './App.css';
import AddedCarts from '../src/components/AddedCarts.jsx';
import Cards from './components/Cards';

function App() {
  const [cart, setCart] = useState([]);
  const [delayCount, setDelayCount] = useState(0);

  const addToCart = (item) => { // item is the object that we pass from the child component (item)  
    if (cart.indexOf(item) !== -1) return; // if the item is already in the cart, return
    setCart([...cart, item]); // spread operator is used to copy the array and add the new item to the array
  } 

  return (
    <div className="App">

      <div className='left'>
      <Cards 
      addToCart={addToCart} />
      </div>

      <div className='right'>
       <AddedCarts
       delayCount={delayCount}
       setDelayCount={setDelayCount}
       cart={cart} 
       setCart={setCart}/>
      </div>
    </div>   
  );
}

export default App;

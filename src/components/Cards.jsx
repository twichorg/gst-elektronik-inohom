import React, { useState } from 'react'
import {list} from '../Data';
import Card from './Card';
import {GiCancel} from 'react-icons/gi';
import {BsDownload} from 'react-icons/bs';

const Cards = ({addToCart}) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <section>
      <div className='search-filter'>
        <div></div>
        <input 
        className='search-input'
        value={inputValue}
        onChange={inputValueChange} 
        type='text' 
        placeholder='Search' />
        <span> <GiCancel  size={25}/> </span>
        <span> <BsDownload size={25}/> </span>
      </div>

        {list
        .filter(item => item.category_name.toLowerCase().includes(inputValue.toLocaleLowerCase()))
        .map(item => (
            <Card 
            key={item.id} 
            item={item} 
            addToCart={addToCart} 
            />
        ))}
    </section>
  )
}

export default Cards
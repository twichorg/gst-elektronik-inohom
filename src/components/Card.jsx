import React, { useState } from 'react'

const Card = ({item, addToCart}) => {

    const [count, setCount] = useState(item.count); //count is the state and setCount is the function to update the state

    const [selectValue, setSelectValue] = useState(''); 

    console.log("button",selectValue);

    const handleChange = (e) => {
        setSelectValue(e.target.value);
    }
    const decrementCount = () => {
        setCount(count - 1);  //decrement the count by 1
    }
    const incrementCount = () => {
        setCount(count + 1);  //increment the count by 1
    }
   
  return (
    <div className='card-container'>
        <h4>{item.category_name}</h4>
        <span className='item-logo'>{item.logo}</span>
        <button
        className='btn-plus-negative'
        onClick={()=>decrementCount()}
        >{item.negative_button}</button>
        <span>{count}</span>
        <button
        className='btn-plus-negative'
        onClick={()=>incrementCount()}
        >{item.positive_button}</button>
       <select className='select-input'
       value={selectValue}
       onChange={handleChange} 
       >
            <option value='' disabled>Seç</option>
        <option className='option-input' value={item.check_box_parameter_first}>{item.check_box_parameter_first}</option>
        <option className='option-input' value={item.check_box_parameter_second}>{item.check_box_parameter_second}</option>
        <option className='option-input' value={item.check_box_parameter_third}>{item.check_box_parameter_third}</option>
       </select>
      <button className='add-btn' onClick={()=>addToCart({...item,count,selectValue})}>Ekle</button> 
    </div>
  )
}

export default Card
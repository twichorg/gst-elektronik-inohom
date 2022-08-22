import React from 'react'
import {BsCaretUpSquareFill} from 'react-icons/bs'
import {BsCaretDownSquareFill} from 'react-icons/bs'

const AddedCart = ({item,delayCount,setDelayCount}) => {
  const incrementDelayCount = () => {
    setDelayCount(delayCount + 1);
  }
  const incrementDelayCount10 = () => {
    setDelayCount(delayCount + 10);
  }
  const decrementDelayCount = () => {
    setDelayCount(delayCount - 1);
  }
  const decrementDelayCount10 = () => {
    setDelayCount(delayCount - 10);
  }

  return (
    <>
  <div className='added-cart'>
    <p>{item.category_name}</p>
    <p>{item.logo}</p>
    <span><BsCaretUpSquareFill size={20}/></span>
    <span><BsCaretDownSquareFill size={20}/></span>
    <p>{item.count}</p>
    <p>{item.selectValue}</p>
  </div>

  <div className='delay-container'>
    <button 
    onClick={incrementDelayCount}
    className='btn-delay' >+1</button>
    <button 
    onClick={()=>incrementDelayCount10()}
    className='btn-delay'>+10</button>
    <span className='span-delay'>Gecikme Süresi:{delayCount} </span>
    <button
    onClick={()=>decrementDelayCount()} 
    className='btn-delay'>-1</button>
    <button
      onClick={()=>decrementDelayCount10()} 
    className='btn-delay'>-10</button>
  </div>

  </>
  )
}

export default AddedCart
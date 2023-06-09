import React from 'react'
import { setFilter } from './Slices/taskReducer'
import { useDispatch } from 'react-redux'

const Filters = () => {
    const dispatch= useDispatch()
    

  return (
    <div style={{display:'flex',marginTop:'1rem',justifyContent:'space-between',width:'200px',marginRight:'auto',marginLeft:'auto'}}>
        Filters
    <button className='my-btn' onClick={()=>dispatch(setFilter('All'))}>All</button>
    <button className='my-btn' onClick={()=>dispatch(setFilter('done'))}>done</button>
    <button className='my-btn' onClick={()=>dispatch(setFilter('undone'))}>undone</button>
   
    
    </div>
  )
}

export default Filters
import React from 'react'
import { removeTask } from './Slices/taskReducer'
import { useDispatch } from 'react-redux'
// import { useSelector } from "react-redux";
const SingleItem = (task) => {
const dispatch= useDispatch()
const removeHandler=()=>{
  dispatch(removeTask(task.id))
}
  return (
    <div style={{display:'flex',justifyContent:"space-between"
    }}>
      {/* <h3>SingleItem</h3> */}
<p> {task.content}</p>
<button onClick={removeHandler}>X</button>

    </div>
  )
}

export default SingleItem
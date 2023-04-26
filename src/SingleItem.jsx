import React ,{useState,useRef}from 'react'
import { removeTask,renameTask } from './Slices/taskReducer'
import { useDispatch } from 'react-redux'
// import { useSelector } from "react-redux";
const SingleItem = (task,content) => {
const dispatch= useDispatch()
const inputRef = useRef()
const [editMode,setEditMode] = useState(false);
const removeHandler=()=>{
  dispatch(removeTask( task.id ))
}
  return (
    <div style={{display:'flex',justifyContent:"space-between"
    }}>

{!editMode ? (
        <div className="" onClick={() => setEditMode(prev => !prev)}>
          <span>{task.content}</span>
        </div>
      ):
       (
        <form onSubmit={ev => {ev.preventDefault();setEditMode(false);}}>
          <input type="text" value={task.content}
                 onChange={()=> dispatch(renameTask()) } />
                 <button>update</button>
        </form>
      )}   

<button onClick={removeHandler}>X</button>
    </div>
  )
}
export default SingleItem
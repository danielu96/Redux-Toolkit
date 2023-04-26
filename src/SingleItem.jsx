import React ,{useState,useRef}from 'react'
import { removeTask,renameTask } from './Slices/taskReducer'
import { useDispatch } from 'react-redux'
import Checkbox from "./Checkbox";
// import { useSelector } from "react-redux";
const SingleItem = (task,done,onToggle) => {
  
const dispatch= useDispatch()
const [editMode,setEditMode] = useState(false);

  return (
    
    <div style={{width:'400px',display:'flex',justifyContent:"space-between"
    }}>    
<Checkbox checked={done} onClick={() => onToggle(!done)} />
{!editMode ? (
        <div className="" onClick={() => setEditMode(prev => !prev)}>
          <span>{task.content}</span>
        </div>
      ):
       (
        <form style={{marginLeft:'1rem'}} onSubmit={ev => {ev.preventDefault();setEditMode(false);}}>
          <input type="text" value={task.content}
                 onChange={(ev)=> dispatch(renameTask(ev.target.value)) } />
                 <button>update</button>
        </form>
      )}   

<button onClick={()=> dispatch(removeTask(task.id))}>X</button>
    </div>
  )
}
export default SingleItem
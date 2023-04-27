import React ,{useState,useRef}from 'react'
import { removeTask,renameTask } from './Slices/taskReducer'
import { useDispatch } from 'react-redux'
import Checkbox from "./Checkbox";
// import { useSelector } from "react-redux";
const SingleItem = (task,done,onToggle,handleSubmit) => {
  
const dispatch= useDispatch()
const [editMode,setEditMode] = useState(false);
const removeHandler=()=>{
  
  dispatch(removeTask(task.id))
  // showAlert(true, 'danger', 'you deleted one value')

}

  return (
    <>
  <div> {alert.show && <Alert {...alert} removeAlert={showAlert} task={task}/>}</div> 
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

<button onClick={
  // ()=> dispatch(removeTask(task.id))
removeHandler
  }>X</button>
    </div>
    </>
  )
}
export default SingleItem
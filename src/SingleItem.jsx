import React ,{useState,useRef,useEffect}from 'react'
import { removeTask,handleChange,setEditTask, renameTask,ToggleTask,changeTask,UpdateTask } from './Slices/taskReducer'
import { useDispatch } from 'react-redux'
import Checkbox from "./Checkbox";
// import { useSelector } from "react-redux";






const SingleItem = (task,id) => {

  useEffect(()=>{
    dispatch(
      UpdateTask({
        name:task.name
      })
    )
  },[task.name]);

// useEffect(() => {
//         // dispatch(SortProducts(products))
//         dispatch(setEditTask(task.name))
//         console.log(task.name)
//     }, [task.name
//         // products.sort,
//         // products.filters
//     ])


  
const dispatch= useDispatch()
const [editMode,setEditMode] = useState(false);
const removeHandler=()=>{
  
  dispatch(removeTask(task.id))
  // showAlert(true, 'danger', 'you deleted one value')

}
const renameHandler=(e)=>{
  const name= e.target.name;
  const value = e.target.value;
  dispatch(handleChange({name,value}))
  console.log(name)
} 

 const updateTaskDone=(id, newDone) =>{
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[id].done = newDone;
      return newTasks;
        });
       
  }
const onToggle= () =>{done => updateTaskDone(id, done)} 
  return (
    <>

    <div className='singleItem' >   

     <input type='checkbox' checked={task.completed}
  // onChange={()=>onToggle(task.id)}
  onChange={()=>dispatch(ToggleTask(task.id))
  }
  ></input> 
 {/* <Checkbox checked={!done} onClick={() => onToggle(task.id)} /> */}
 <Checkbox checked={task.completed} 
 onClick={() => 
  dispatch(ToggleTask(task.id))
  // dispatch(ToggleTask(task.done))
}

  />    
   
{!editMode ? (
        <div className='singleTask' onClick={() => setEditMode(prev => !prev)}>
          {/* <span>{task.name}</span> */}
          <p  style={task.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {task.name}
                </p>
                <button style={{height:'2rem',marginTop:'1rem'}}>edit</button>
        </div>
      ):
       (
        <form style={{marginLeft:'1rem',marginTop:'1rem'}} 
        // onSubmit={ev => {ev.preventDefault();setEditMode(false);}}
        >
          <input type="text" value={task.name}
         onChange= 
        //  {renameHandler} 
         {()=>dispatch(UpdateTask(task.id))}
          // {()=>dispatch(setEditTask(id))}
        
          />
                 <button 
onClick=
{()=>dispatch(UpdateTask(task.id))}
// {renameHandler}
                //  onClick={()=>dispatch(setEditTask(id))}
                 >update</button>
        </form>
      )}   

<button style={{height:'2rem',marginTop:'1rem'}} onClick={
  // ()=> dispatch(removeTask(task.id))
removeHandler
  }>X</button>
    </div>
    </>
  )
}
export default SingleItem
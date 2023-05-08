import React ,{useState,useRef,useEffect}from 'react'
import { removeTask,handleChange,setEditTask, renameTask,ToggleTask,changeTask,UpdateTask,update } from './Slices/taskReducer'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from "./Checkbox";

const SingleItem = (task) => {
  const[title,setTitle] = useState('');
  // const {state,setState}=useState(initialState)
  // const {name}=useSelector((state)=> state.task.tasks)
  const inputRef = useRef()
  // const handleEdit =(e) => {
  //   e.preventDefault();
  //   // showAlert(true, 'danger', 'you must enter value')
  //   if(inputRef.current.value.trim()){
  //     // showAlert(true, 'success', 'you added new value')
  //     dispatch(AddTask({

  //       id:Math.random()* 1000 ,
  //       name:inputRef.current.value,
  //       completed:false,
       
  //     }))
  //     console.log(inputRef.current.value);
  //   }
  //   inputRef.current.value=""
  // }

  useEffect(()=>{ 
    if(task) {  
      setTitle(task.title)
    }
  },[task]);

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
// handleUpdate = (e) =>{
//   e.preventDefault();
//   dispatch(update({name,value}))
// };
const renameHandler=()=>{
  //  const name = e.target.name;
  // const value = e.target.value;
  dispatch(update({
    ...task,
    // name:task.name,
    title:title,
    // value:task.value
  }))
 
} 
// handleInputChange = (e)=>{
// const {name,value}=e.target;
// setState({...state,[name]:value})
// }

//  const updateTaskDone=(id, newCompleted) =>{
//     setTasks(prev => {
//       const newTasks = [...prev];
//       newTasks[id].completed = newCompleted;
//       return newTasks;
//         });       
//   }
// const onToggle= () =>{completed => updateTaskDone(id, completed)} 
// const onToggleTask= () =>{completed => dispatch(ToggleTask(id, completed))} 
  return (
    <>
    <div className='singleItem' >  
     <input type='checkbox' checked={task.completed}
  // onChange={()=>onToggle(task.id)}
  onChange=
  { ()=>dispatch(ToggleTask(task.id))   }
  ></input> 
   <p>{task.time}</p>
 {/* <Checkbox checked={!done} onClick={() => onToggle(task.id)} /> */}
 <Checkbox checked={task.completed} 
 onClick={  () =>   dispatch(ToggleTask(task.id))  }  />    
   
{!editMode ? (
        <div className='singleTask' onClick={() => setEditMode(prev => !prev)}>
          {/* <span>{task.name}</span> */}
          <p  style={task.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {title} 
               
                </p>
               
                <button style={{height:'2rem',marginTop:'1rem'}}>edit</button>
        </div>
      ):
       (
        <form style={{marginLeft:'1rem',marginTop:'1rem'}} 
        onSubmit={ev => {ev.preventDefault();setEditMode(false);}}
        >
          <input type="text" id='title' value={title}
         onChange= 
        //  {()=>dispatch(changeTask(task.name))}
        // {(e)=>(setName(e.target.value))}
        // {handleUpdate}
      
          {(e)=>setTitle(e.target.value)}
        //  {()=>dispatch(changeTask(task.name))}
        //  {()=>handleChange(task.name)}
        //  {renameHandler} 
        //  {()=>dispatch(changeTask(task.id))}
        // {handleEdit}
          // {()=>dispatch(setEditTask(id))}
                  />
                 <button 
onClick=
// {()=>dispatch(changeTask(task.name))}
// {handleEdit}
{renameHandler(task.title)}
// {handleUpdate}
                //  onClick={()=>dispatch(setEditTask(id))}
                 >update</button>
        </form>
      )}   

<button style={{height:'2rem',marginTop:'1rem'}} onClick={removeHandler}>X</button>
    </div>
    </>
  )
}
export default SingleItem
import React ,{useState,useEffect}from 'react'
import { removeTask,UpdateStatus,ToggleTask,update,changeTask,Toggler, setFilter,UpdateTask, GetTask } from './Slices/taskReducer'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from "./Checkbox";

// const initialState={
//   status:""
// }
 

const SingleItem = (task) => {
  // const [state, setState] = useState(initialState);
 
  // const[title,setTitle] = useState('');
const {completed,id,time,title,status}=task



    // useEffect(()=>{ 
    // if(task) {  
    //    completed:false = task.status==='undone',
    //    completed:true = task.status==='done',
    //   })
    // }
    
    
  // },[task,completed]);  
  //   useEffect(()=>{ 
     
  //     dispatch(GetTask(id))    
  // },[id]); 


const dispatch= useDispatch();
const [ newTitle,setNewTitle]=useState();
const [editMode,setEditMode] = useState(false);
// const [status,setStatus]= useState('undone')
const removeHandler=()=>{  
  dispatch(removeTask(id))
}
const handleDropdownChange = (e) => {
  // const { name, value } = e.target;
  // const {status,name}=e.target
  // setState({ ...state, [name]: value });
  dispatch(UpdateStatus({
    // ...task, 
    id,
    name:e.target.value,    
    status:e.target.value,
    // completed:e.target.value
  }

  ))
  dispatch(ToggleTask(id))
};


const renameHandler=(e)=>{  
  const title = e.target.value;
  dispatch(update({
    ...task,    
    title, 
    status  
  }))

//      useEffect(()=>{ 
//     if(editMode && task) {  
//       title(task.title);
//       setStatus(task.status)
//     }
//   },[task,editMode]);
// } ;
// useEffect(()=>{ 
//   if(!completed && task) {  
    
//     dispatch(UpdateStatus(task.status))
//     // dispatch(UpdateTask(task.title))
//   }
// },[task,completed]);
} 
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
     <input type='checkbox' checked={completed}  
  onChange=
  { 
    // ()=>dispatch(ToggleTask(id)) 
    // ||
     handleDropdownChange  }
  ></input> 
 
   <p>{time}</p>
   {/* <p 
  //  onClick={  () =>   dispatch(setFilter('done'))  } 
  onClick={  () =>   dispatch(Toggler({id:task.id,status:task.status}))  } 
   >{status}</p> */}
    <select style={{margin:'1rem'}} 
      name="status"
      onChange={handleDropdownChange}
    // onChange=
    // {  () =>  
    //   dispatch(
    //     UpdateStatus({
    //   id:task.id,
    //   status:task.status})) 
    //  } 
    // // {()=> setStatus({id:task.id,status:task.status})}
    >    <option>select status</option>
            <option 
            
            value="undone" select={status === "undone" ? status : ""}
            >
            undone
        </option>
        <option  
        
          value="done" select={status === "done" ? status : ""}
        >
          done
           {/* undone */}
            </option>
      </select>
 {/* <Checkbox checked={!done} onClick={() => onToggle(task.id)} /> */}
 <Checkbox checked={completed} 
 onClick={  () =>   dispatch(ToggleTask(id))  }  />      
{!editMode ? (
        <div className='singleTask' onClick={() => setEditMode(prev => !prev)}>         
          <p  style={ completed===true || task.status==='done' ?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {title}                
                </p>               
                <button style={{height:'2rem',marginTop:'1rem'}}>edit</button>
        </div>
      ):
       (
        <form style={{marginLeft:'1rem',marginTop:'1rem'}} 
        onSubmit={ev => {ev.preventDefault();setEditMode(false);}}
        >
          <input type="text" id='title' 
          // value={title}
         onChange= 
          // {renameHandler}
        //  { (e)=>dispatch(update(e.target.value))}                  
                {(e)=>setNewTitle(e.target.value)}    
                       />  
                       {/* <button  onClick= { ()=>dispatch(update(task.title))} >update</button>      */}
                       <button  onClick= { ()=>dispatch(UpdateTask({id:task.id,title:newTitle}))} >update</button>     
        </form> )}
       {/* <button onClick={renameHandler}>update</button> */}
       

<button style={{height:'2rem',marginTop:'1rem'}} onClick={removeHandler}>X</button>
    </div>
    </>
  )
}
export default SingleItem
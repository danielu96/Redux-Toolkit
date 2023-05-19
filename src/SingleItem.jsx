import React ,{useState,useEffect}from 'react'
import { removeTask,setEditTask,ToggleTask,update,changeTask,Toggler, setFilter,UpdateTask } from './Slices/taskReducer'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from "./Checkbox";

const SingleItem = (task) => {
  // const[title,setTitle] = useState('');
const {completed,id,time,title,status}=task

  //   useEffect(()=>{ 
  //   if(task) {  
  //     dispatch(update(title))
  //   }
  // },[task]);



// useEffect(() => {
//         // dispatch(SortProducts(products))
//         dispatch(setEditTask(task.name))
//         console.log(task.name)
//     }, [task.name
//         // products.sort,
//         // products.filters
//     ])


  
const dispatch= useDispatch();
const [ newTitle,setNewTitle]=useState();
const [editMode,setEditMode] = useState(false);
const removeHandler=()=>{  
  dispatch(removeTask(id))
  // showAlert(true, 'danger', 'you deleted one value')
}
// handleUpdate = (e) =>{
//   e.preventDefault();
//   dispatch(update({name,value}))
// };

const renameHandler=(e)=>{
  //  const name = e.target.name;
  const title = e.target.value;
  dispatch(update({
    ...task,
    // name:task.name,
    title,
    // title:(`${title}`),
    // time:time,
    // value:task.value
  }))
  //    useEffect(()=>{ 
  //   if(task) {  
  //     dispatch(update(title))
  //   }
  // },[task]);
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
     <input type='checkbox' checked={completed}
  // onChange={()=>onToggle(task.id)}
  onChange=
  { ()=>dispatch(ToggleTask(id))   }
  ></input> 
   <p>{time}</p>
   <p 
  //  onClick={  () =>   dispatch(setFilter('done'))  } 
  onClick={  () =>   dispatch(Toggler('done'))  } 
   >{status}</p>
 {/* <Checkbox checked={!done} onClick={() => onToggle(task.id)} /> */}
 <Checkbox checked={completed} 
 onClick={  () =>   dispatch(ToggleTask(id))  }  />    
   
{!editMode ? (
        <div className='singleTask' onClick={() => setEditMode(prev => !prev)}>
         
          <p  style={completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
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
          //  {(e)=>dispatch(update(e.target.value))}         
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
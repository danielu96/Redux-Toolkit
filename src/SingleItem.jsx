import React ,{useState,useEffect}from 'react'
import { removeTask,UpdateStatus,ToggleTask,update,changeTask,Toggler, setFilter,UpdateTask, GetTask } from './Slices/taskReducer'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from "./Checkbox";

 
const SingleItem = ({showAlert,id,time,title,status,...task}) => { 
 
// const {id,time,title,status}=task


  //   useEffect((completed)=>{ 
  //   if(task) {  
  //      completed:false = task.status==='undone',
  //      completed:true = task.status==='done',
  //     })
  //   }
    
    
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
   showAlert(true, 'danger', 'you deleted value')
}
const handleDropdownChange = (e) => {     
  
  dispatch(UpdateStatus({    
    id,
    name:e.target.value,    
    status:e.target.value,  
      
  },
  showAlert(true, 'success', 'you changed status')
  ))
  // dispatch(ToggleTask(task.id))
};
const updateHandler=()=>{
  // e.preventDefault();
  if(!newTitle) 
  showAlert(true,'danger', 'enter new value')
  else 
  {
  showAlert(true,'success', 'value updated')
  dispatch(UpdateTask({id:id,title:newTitle}
  ))
  
  // showAlert(true, 'success', 'you changed task')
};
}



const renameHandler=(e)=>{  
  const title = e.target.value;
  dispatch(update({
    ...task,    
    title, 
    status  
  }))
}
// useEffect(()=>{
//   if(type==="update" && task){
    
//     setNewTitle(task.title)
//   }
//   else{
//     setNewTitle('')
//   }

// },[type,task])



//  const updateTaskDone=(id, newCompleted) =>{
//     setTasks(prev => {
//       const newTasks = [...prev];
//       newTasks[id].completed = newCompleted;
//       return newTasks;
//         });       
//   }
// const onToggle= () =>{completed => updateTaskDone(id, completed)} 



  return (
    <>
    
    <div className='singleItem' >  
     {/* <input type='checkbox'     
     checked={completed}  
  onChange=
  { 
    // ()=>dispatch(ToggleTask(id)) 
    // ||
     handleDropdownChange  }
  ></input>  */}
  <p  style={ status==='done' ?{color:'blue',border:'solid 1px blue',width:'6rem'}: status==='select status' ?{color:'green',border:'solid 1px green',width:'6rem'}:{color:'red',border:'solid 1px red',width:'6rem'}}>
                {status==='select status'? 'not selected' : status}                
                </p>   

   <p>{time}</p>  
    <select style={{margin:'1rem',borderRadius:'5px'}} 
      name="status"
      type="update"
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
            value="undone" select={status === "undone" ? status : "" }
            >
            undone
        </option>
        <option          
          value="done" select={status === "done" ? status : "" }
        >
          done          
            </option>
      </select>
 {/* <Checkbox checked={!done} onClick={() => onToggle(task.id)} /> */}
 {/* <Checkbox checked={completed} 
//  onClick={  () =>   dispatch(ToggleTask(id))  } 
  />       */}
      
{!editMode ? (
        <div className='singleTask' onClick={() => setEditMode(prev => !prev)}>         
          <p  style={      
              status==='done' ?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {title}                
                </p>               
                <button style={{height:'2rem',marginTop:'1rem',marginLeft:"auto"}}> edit </button>
        </div>
      ):
       (
        <form style={{marginLeft:'1rem',marginTop:'1rem'}} 
        onSubmit={ev => {ev.preventDefault();setEditMode(false);}}
        >
          <input type="text" id='title' 
          maxLength={20}
          value={newTitle}
          required
         onChange= 
          // {renameHandler}
        //  { (e)=>dispatch(update(e.target.value))}                  
                {(e)=>setNewTitle(e.target.value)}    
                       />  
                       {/* <button  onClick= { ()=>dispatch(update(task.title))} >update</button>      */}
                       <button style={{marginLeft:'1rem'}} onClick= {updateHandler}
                      //  {()=> showAlert(true, 'success', 'you edit task')}
                      // {  dispatch(UpdateTask({id:id,title:newTitle,}))
                      //   } 
                        >update</button>     
        </form> )}
        
       {/* <button onClick={renameHandler}>update</button> */}
       

<button style={{height:'2rem',marginTop:'1rem'}} onClick={removeHandler}>X</button>
    </div>
    </>
  )
}
export default SingleItem
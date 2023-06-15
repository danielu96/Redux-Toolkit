import React ,{useState,useEffect}from 'react'
import { removeTask,UpdateStatus,ToggleTask,update,changeTask,Toggler, setFilter,UpdateTask, GetTask } from './Slices/taskReducer'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from "./Checkbox";
 
const SingleItem = ({showAlert,id,time,title,status,...task}) => {      
const dispatch= useDispatch();
const [ newTitle,setNewTitle]=useState();
const [editMode,setEditMode] = useState(false);
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
  return (
    <>    
    <div className='singleItem' >    
  <p  style={ status==='done' ?{color:'blue',border:'solid 1px blue',width:'6rem'}: status==='select status' ?{color:'green',border:'solid 1px green',width:'6rem'}:{color:'red',border:'solid 1px red',width:'6rem'}}>
                {status==='select status'? 'not selected' : status}                
                </p>   

   <p>{time}</p>  
    <select style={{margin:'1rem',borderRadius:'5px',width:'150px'}} 
      name="status"
      type="update"
      onChange={handleDropdownChange}   
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
{!editMode ? (
        <div className='singleTask' onClick={() => setEditMode(prev => !prev)}>         
          <p  style={      
              status==='done' ?{textDecoration:'line-through',marginRight:'1rem'}:{textDecoration:'none',marginRight:'1rem'}}>
                {title}                
                </p>               
                <button style={{height:'2rem',marginTop:'0.5rem',marginLeft:"auto",borderRadius:'5px'}}> edit </button>
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
                {(e)=>setNewTitle(e.target.value)}    
                       />                         
                       <button style={{marginLeft:'1rem'}} onClick= {updateHandler}                    
                        >update</button>     
        </form> )}   
          
<button style={{height:'2rem',marginTop:'0.5rem',borderRadius:'5px'}} onClick={removeHandler}>delete</button>
    </div>
    </>
  )
}
export default SingleItem
import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { AddTask } from './Slices/taskReducer';
import Alert from './Alert';
import ModalFocusAfterClose from './Modal';
const ToDo = ({showAlert}) => {
  const inputRef = useRef() 
  const[title,setTitle]=useState('')
    const {task}=useSelector((state)=> state.task.tasks)  
    const dispatch = useDispatch();
    const handleSubmit =(e) => {
      e.preventDefault();
      if (!inputRef.current.value.trim())
      //  (!title)
      showAlert(true, 'danger', 'you must enter value')
      else   
            {
        showAlert(true, 'success', 'you added new value')
        dispatch(AddTask(
          {      
          id:Date.now(),           
          // // // id:Math.random()* 1000 ,
           title:inputRef.current.value,
           time:new Date().toLocaleString(),
          // title,
          completed:false,
          status:'undone',         
        }
        ))       
      }
      inputRef.current.value=""    
        }  
   return  ( 
    <div style={{display:'grid',marginTop:'2rem',marginBottom:'1rem',height:'2rem',justifyContent:'center', rowGap :'1rem'}}>
            <form  style={{ bottom:'0px'}} onSubmit={handleSubmit}>      
      <input  type="text"
      id='title'
      maxLength="20"
            //  value={title}
             onChange={(e) => setTitle(e.target.value)}
            ref={inputRef}                     
            />
             <button  style={{marginLeft:'5px',padding:'5px',borderRadius:'5px'}}>add</button>
    </form>  
    </div>
  )
}
export default ToDo
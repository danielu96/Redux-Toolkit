import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { AddTask } from './Slices/taskReducer';
import Alert from './Alert';


const ToDo = () => {
  const inputRef = useRef()
 
  const[title,setTitle]=useState('')
    const {task}=useSelector((state)=> state.task.tasks)
    // const {taskName,setTaskName}=useState('')
    const [alert, setAlert] = useState({ show: false, msg: '', type: ''  });
   const showAlert = (show = false, type = '', msg = '' ) => {
         setAlert({ show,  type, msg  });
       };
    const dispatch = useDispatch();


    const handleSubmit =(e) => {
      e.preventDefault();
      if (!inputRef.current.value.trim())
      //  (!title)
      showAlert(true, 'danger', 'you must enter value')
      else
      // (e.target.value)
      

      {
        showAlert(true, 'success', 'you added new value')
        dispatch(AddTask(
          {
      //  title,
          //  title,
          id:Date.now(),
          // id,
          // // // id:Math.random()* 1000 ,
           title:inputRef.current.value,
           time:new Date().toLocaleString(),
          // title,
          completed:false,
         
        }
        ))
        // console.log(title);
      }
      inputRef.current.value=""
      // setTitle=""
      // e.target.value=""
      // value=""
    
    }
  
  // const handleSubmit=(ev) =>{
  //   ev.preventDefault();
  //   if(!taskName)
  //       return(
  //         showAlert(true, 'danger', 'please enter value')
  //         // alert('Fill the Form please')
         
  //       )
  //       else 
  //       showAlert(true, 'success', 'one task added ');
  //      dispatch(AddTask({ 
  //       // name:taskName,
  //       id: Math.random(),
  //       value:taskName,
       

  //      },
  //      console.log(taskName)
  //      ));
      
  //       setTaskName('');
  //       // alert('Success you just added')    
  //          }
  return  ( 
    <div style={{display:'grid',marginTop:'1rem',marginBottom:'1rem',height:'5rem',justifyContent:'center', rowGap :'1rem'}}>
       
         <div >  {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={task} />|| "add new value"}</div>
  <form  style={{ bottom:'0px'}} onSubmit={handleSubmit}>      
      <input  type="text"
      id='title'
            //  value={title}
             onChange={(e) => setTitle(e.target.value)}
            ref={inputRef}
            //  onChange={event => AddTask(event.target.value)}           
            />
             <button>add</button>
    </form>
    </div>
  )
}
export default ToDo
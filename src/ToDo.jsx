import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddTask } from './Slices/taskReducer';
import Alert from './Alert';


const ToDo = () => {
  const inputRef = useRef()
  const {tasks,setTasks} =useState('')
    // const {taskName,setTaskName}=useState('')
    const [alert, setAlert] = useState({ show: false, msg: '', type: ''  });
   const showAlert = (show = false, type = '', msg = '' ) => {
         setAlert({ show,  type, msg  });
       };
    const dispatch = useDispatch();
    const handleSubmit =(e) => {
      e.preventDefault();
      showAlert(true, 'danger', 'you must enter value')
      if(inputRef.current.value.trim()){
        showAlert(true, 'success', 'you added new value')
        dispatch(AddTask({
          id:Math.random()* 1000 ,
          content:inputRef.current.value,
          done:false,
        }))
        console.log(inputRef.current.value);
      }
      inputRef.current.value=""
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
    <div>
         {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={tasks}/>}
  <form onSubmit={handleSubmit}>      
      <input type="text"
            //  value={taskName}
            ref={inputRef}
            //  onChange={event => AddTask(event.target.value)}           
            />
             <button>add</button>
    </form>


    </div>
  )
}

export default ToDo
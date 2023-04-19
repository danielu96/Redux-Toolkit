import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddTask } from './Slices/taskReducer';
import Alert from './Alert';


const ToDo = () => {
  const {tasks,setTasks} =useState('');
    const {taskName,setTaskName}=useState('')
    const [alert, setAlert] = useState({ show: false, msg: '', type: ''  });
   const showAlert = (show = false, type = '', msg = '' ) => {
         setAlert({ show,  type, msg  });
       };
    const dispatch = useDispatch();
  const handleSubmit=(ev) =>{
    ev.preventDefault();
    if(!taskName)
        return(
          showAlert(true, 'danger', 'please enter value')
          // alert('Fill the Form please')
         
        )
        else 
        showAlert(true, 'success', 'one task added ');
       dispatch(AddTask(taskName));
        setTaskName('');
        // alert('Succes you just added')    
           }
  return  ( 
    <div>
         {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={tasks}/>}
  <form onSubmit={handleSubmit}>      
      <input type="text"
             value={taskName}
             onChange={event => AddTask(event.target.value)}           
            />
             <button>add</button>
    </form>


    </div>
  )
}

export default ToDo
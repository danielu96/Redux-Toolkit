import { useState,useRef } from 'react'
import Alert from './Alert'
import './App.css'
import ToDo from './ToDo'
import SingleItem from './SingleItem'
import { useSelector,useDispatch } from 'react-redux'
import { AddTask } from './Slices/taskReducer';


function App() {
  const inputRef = useRef()
  const  tasks  = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  // const handleSubmit =(e) => {
  //   e.preventDefault();
  //   if(inputRef.current.value.trim()){
  //     dispatch(AddTask({
  //       id:Math.random()* 1000 ,
  //       content: inputRef.current.value,
  //     }))
  //     console.log(inputRef.current.value);
  //   }
  //   inputRef.current.value=""
  // }

  
  return (
    <div className="App">
      
     <h1>Redux-Toolkit</h1>
     <p>It will be something with Toolkit</p>
   <ToDo/>
   {/* <div>
         {alert.show && <Alert {...alert} removeAlert={showAlert} tasks={tasks}/>}
  <form onSubmit={handleSubmit}>      
      <input type="text"
            //  value={taskName}
            ref={inputRef}
            //  onChange={event => AddTask(event.target.value)}           
            />
             <button>add</button>
    </form>


    </div> */}



   <div  style={{height:'220px'}}>
      {tasks.map((task,id) => (
        <SingleItem
         key={id} 
        {...task}  content={task.content}
              // Rename={newName => renameTask(id,newName)}
              // removeItem={() => removeItem(id)}
              // onToggle={done => updateTaskDone(id, done)} 
              />
         ))} 
     {/* <button onClick={()=> clearItems()}>clear all</button> */}
</div>
    </div>
  )
}

export default App

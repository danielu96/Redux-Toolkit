import { createSlice } from '@reduxjs/toolkit'
// import React from 'react'
const items = localStorage.getItem('tasks') !== null ? JSON.parse
    (localStorage.getItem('tasks')) : [];

const initialState ={
  // isEditing:false,
  
  tasks:items,
  
}

const taskReducer = createSlice ({
  name:'task',
  initialState,
  reducers:{
    AddTask: ( state, action ) => {   
//       const newTask = {
//         // id: nanoid(),
//         id:Date.now(),
//         // id:Math.random()* 1000,
//         title: action.payload,
//         completed:false,
//       }
//  state.tasks.push(newTask)  ;
      state.tasks.push(action.payload)  
     
      localStorage.setItem('tasks', JSON.stringify(state.tasks.map
        (item => item)))
      },
      UpdateTask:(state,action)=>{
        state.name=action.payload.name,
  state.value=action.payload.value
        let data = action.payload;
        const UpdateA=[];
        state.tasks.map((task)=>{
          if(task.id===data.id){
            task.id= data.id;
            task.name=data.name;
            task.completed=data.completed;
          }
          UpdateA.push(task)
        })
        UpdateA,
        localStorage.setItem('tasks', JSON.stringify(state.tasks.map
          (item => item)))
      },
      // ToggleTask:(state,action) =>{
      // state.tasks.map(task =>
      //   (task.id === action.id)
      //     ? {...task, completed: !task.completed}
      //     : task
      // )           
      //   localStorage.setItem('tasks', JSON.stringify(state.tasks.map
      //     (item => item)))
      // },
      ToggleTask(state, action) {
        const task = state.tasks.find(task => task.id === action.payload)
        if (task) {
          task.completed = !task.completed
        }
        localStorage.setItem('tasks', JSON.stringify(state.tasks.map
          (item => item)))
      },
// update (state,action){
//   const task = state.tasks.find(task => task.id === action.payload.id);
//   if(task === !task){
//  title=action.payload,
//   state.value=action.payload.value
//   }
//   localStorage.setItem('tasks', JSON.stringify(state.tasks.map
//     (item => item)))

// },
update:(state,action)=>{  
  const tasks  =   window.localStorage.getItem('tasks')  ;
   
  if (tasks) {
         const tasksListArr = JSON.parse(tasks);  
          
        tasksListArr.forEach((task) => {
          if (task.id === action.payload.id) {       
            task.title = action.payload.title;
          }    });  
              
      // console.log(action.payload)
      window.localStorage.setItem('tasks', JSON.stringify(state.tasks.map
        (item => item)))
          // window.localStorage.setItem('tasks', JSON.stringify(tasksListArr));
          state.tasks= [...tasksListArr];     
        }      
},
// update: (state, action) => {
// const tasks =  localStorage.setItem('tasks', JSON.stringify(state.tasks.map
//         (item => item)))
//   // const tasks = window.localStorage.getItem('tasks');
//   if (tasks) {
//      const tasksListArr = JSON.parse(tasks);   
//     tasksListArr.forEach((task) => {
//       if (task.id === action.payload.id) {       
//         task.title = action.payload.title;
//       }    });       
// // state.tasks = [...tasksListArr];
//     // localStorage.setItem('tasks', JSON.stringify(tasksListArr));
//     localStorage.setItem('tasks', JSON.stringify(state.tasks.map
//       (item => item)))
//   }
// }, 

      changeTask(state, action) {
        const task= action.payload
        // const name= action.payload
         state.tasks.find(task => task.id === action.payload)
      //  state.name = action.payload.name ;
       state.value = action.payload.value ;

        //  state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
        // const name= e.target.name;
    
       
        if (task) {
          state[task.name] = task.name
        }
        // if (value) {
        //   state[value] = value
        // }
        console.log(action.payload)
      return  action.payload,
       
        localStorage.setItem('tasks', JSON.stringify(state.tasks.map
          (item => item)))
      },
        
      // state.tasks.push(newTask);   
      //  },
//      handleChange:(state,action)=>{
//       const task = state.tasks.find(task => task.id === action.payload);
// // state[task.name]= value;
// localStorage.setItem('tasks', JSON.stringify(state.tasks.map
//   (item => item)))
//      },
   setEditTask:(state,{payload})=>{
    return {...state,isEditing:true, ...payload},
    localStorage.setItem('tasks', JSON.stringify(state.tasks.map
      (item => item)))
   }  ,

    removeTask:(state,action)  =>{
       state.tasks =  state.tasks.filter((task) => task.id !== action.payload);
       localStorage.setItem('tasks', JSON.stringify(state.tasks.map
        (item => item)))
       } ,
       renameTask:(state,action)  =>{
        const task = state.tasks.find(task => task.id === action.payload.id);
        // state[task.name]= task.name;
         task.name = action.payload.name
         task.value = action.payload.value
        console.log(task.name)
        task.name;
        localStorage.setItem('tasks', JSON.stringify(state.tasks.map
          (item => item)))
// state.tasks= state.tasks.map(i=> i.id=== action.payload.id ? action.payload :i)
// state.tasks = state.tasks.filter(task => task.id === action.payload);
// return state

  //  state.tasks = state.tasks.filter(task => task.id === action.payload);
  //  const index = state.tasks.findIndex((todo) => todo.id === action.payload.id);
  //  state[index].content = action.payload.content;
        //  let content = action.payload.content;

        // state.tasks =  state.tasks.filter((task) => task.id === action.payload);



            //  const index = state.tasks.findIndex(task => task.id === action.payload.id);

        // state.tasks =  state.tasks.find((task) => task.id === action.payload);
          // const index = state.tasks.filter(task => task.id === action.payload.id);
        
        // state.tasks= state.filter((task) => 
        // task.id === action.payload.id ? action.payload: task
        // );
        // state.tasks =  state.tasks.filter((task) => task.id === action.payload);
        // const index = state.tasks.filter(task => task.id === action.payload.id);
        // const updatedState = [...state];
        // updatedState[index].content = action.payload.content;
},
    clearTasks :(state)=> {
    state.tasks=[]  ;
    localStorage.setItem('tasks', JSON.stringify(state.tasks.map
      (item => item)))
  }   
    },

  }
)
export const {AddTask,removeTask,renameTask,clearTasks,
  handleChange,setEditTask,ToggleTask,changeTask,UpdateTask,update} = taskReducer.actions;
export default taskReducer.reducer
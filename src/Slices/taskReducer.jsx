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
      state.tasks.push(action.payload)  
      // const newTask = {
      //   // id: nanoid(),
      //   id:Math.random()* 1000,
      //   content: action.payload.task,
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
      changeTask(state, action) {
        const task = state.tasks.find(task => task.id === action.payload)
        if (task) {
          task[task.name] = task.name
        }
        localStorage.setItem('tasks', JSON.stringify(state.tasks.map
          (item => item)))
      },
        
      // state.tasks.push(newTask);   
      //  },
     handleChange:(state,action)=>{
      const task = state.tasks.find(task => task.id === action.payload);
state[task.name]= value;
localStorage.setItem('tasks', JSON.stringify(state.tasks.map
  (item => item)))
     },
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
        const task = state.tasks.find(task => task.id === action.payload);
        console.log(action)
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
export const {AddTask,removeTask,renameTask,clearTasks,handleChange,setEditTask,ToggleTask,changeTask} = taskReducer.actions;
export default taskReducer.reducer
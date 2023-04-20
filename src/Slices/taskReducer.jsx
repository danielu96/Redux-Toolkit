import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState ={
  tasks:[],
}

const taskReducer = createSlice ({
  name:'task',
  initialState,
  reducers:{
    AddTask: ( state, action ) => {       
      state.tasks.push(action.payload)
      // state.tasks= action.payload.tasks
       }  ,
       removeTask:(state,action)  =>{
       state.tasks =  state.tasks.filter((task) => task.id !== action.payload);
       } 
          
    },

  }
)
export const {AddTask,removeTask} = taskReducer.actions;
export default taskReducer.reducer
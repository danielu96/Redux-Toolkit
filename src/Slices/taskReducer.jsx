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
       }      
          
    },

  }
)
export const {AddTask} = taskReducer.actions;
export default taskReducer.reducer
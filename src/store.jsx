import React from 'react'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import taskReducer from '../Cart/cartSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
 

  },
});

export default store
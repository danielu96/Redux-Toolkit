import React from 'react'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import taskReducer from './Slices/taskReducer';

  import modeReducer from './Slices/modeReducer';

const store = configureStore({
  reducer: {
    task: taskReducer,
    darkMode:modeReducer

  },
});

export default store
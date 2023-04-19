import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState ={
  tasks:[],
}

const taskReducer = createSlice ({
  name:'task',
  initialState,
  reducers:{
    AddTask: (state, { payload: { name, value } }) => {
       const newTask ={
        name:name,

       }
      state[name] = value;
      state.tasks.push(newTask);
    },
  //   AddTask: (state, action) => {
  //     const { id, cena, title, amount, availableProducts, name, price } = action.payload;
  //     const existingItem = state.cartItems.find((i) => i.id === id)
  //     if (existingItem) {
  //         const tempCart = state.cartItems.map((cartItem) => {
  //             if (cartItem.id === id) {

  //                 let newAmount = cartItem.amount + amount
  //                 if (newAmount > cartItem.max) {
  //                     newAmount = cartItem.max
  //                 }

  //                 return { ...cartItem, amount: newAmount }

  //             } else {
  //                 return cartItem
  //             }

  //         })
  //         state.cartItems = (tempCart)
  //         // return { state, cartItems: tempCart }

  //     }
  //     else {
  //         let max = availableProducts
  //         const newItem = {
  //             id: id,
  //             name,
  //             price,
  //             amount,
  //             availableProducts,
  //             max,
  //         }
  //         state.cartItems.push(newItem);
  //         // return { ...state, cartItems: [...state.cartItems, newItem] }
  //     }
     
  // },
  }
})
export const {AddTask} = taskReducer.actions;
export default taskReducer.reducer
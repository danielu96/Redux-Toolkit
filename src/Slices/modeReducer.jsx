import { createSlice } from "@reduxjs/toolkit";
// const items = localStorage.getItem('mode') !== null ? JSON.parse
//     (localStorage.getItem('mode')) : [];

const initialState = {
    
    mode:JSON.parse(localStorage.getItem('darkMode')) || false,
};

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = !state.mode;
            localStorage.setItem('darkMode', JSON.stringify(state.mode ))
        },
      
    },
});
export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
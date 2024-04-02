import {createSlice} from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        // isMenuOpen:true,
        items:["apples"],
    },
    reducers:{
        toggleMenu:(state, actions)=>{
            // state.isMenuOpen = !state.isMenuOpen;
            // state.items.push(actions.payload);
        },
        removeItems:(state,actions)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];

        }
    },
});


export const{toggleMenu}=appSlice.actions;
export default appSlice.reducer;

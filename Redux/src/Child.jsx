import {createSlice} from '@reduxjs/toolkit';


const counter =createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        inc:(state)=>{state.value+=1},
        dec:(state)=>{state.value-=1}
    }
})

// decher the object 
export  const {inc,dec}=counter.actions;
export default counter.reducers;

// what is slice 
// what is state 
// when you do changes in you ui is called state
// what is reducers
// it is function


// useSelector used for targetting the value 
// and dispatch used for the task are going to perform
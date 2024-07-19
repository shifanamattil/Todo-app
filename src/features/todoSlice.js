import { createSlice, isAction } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:"Todo",
    initialState:[],
    reducers:{
        
        addtask:(state,action)=> {
            console.log(action);
            state.push({id:Date.now(),text:action.payload})
        },
        deletetask:(state,action) =>state.filter((todo)=>todo.id !== action.payload),
        edittask:(state,action)=>{
            return state.map((todo)=>{
                if (todo.id=== action.payload.id){

                    return{...todo,text:action.payload.edittext}
                }
        // completetask:()
                return todo
            })
        }
    },
})
export const{addtask,deletetask,edittask}=todoSlice.actions
export default todoSlice.reducer
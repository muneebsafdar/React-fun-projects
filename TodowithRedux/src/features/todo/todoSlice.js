import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:"muneeb",text:"hello"}],
    action:'Add',
    idToUpdate:''
}

 export const todoSlice=createSlice({
    name:'todo',
    initialState,

    reducers:{
        addtodo:(state,action) => {
            if (!action.payload.input) return
            const todo={
                id:nanoid(),
                text:action.payload.input
            }
            state.todos.push(todo)
            
        },
        removettodo:(state,action) => {
            state.todos=state.todos.filter(todo=> todo.id !==action.payload)  
        } ,
        updatetodo:(state,action)=>{
           
            
            state.todos.map((todo)=> todo.id === action.payload.id ? todo.text=action.payload.input : todo)
            
        },
        updateAction:(state,act)=>{
            state.action=act.payload
        },
        updateIdToUpdate:(state,action)=>{
            state.idToUpdate=action.payload.id         
        }
    }
 })


export const {addtodo,removettodo,updatetodo,updateAction,updateIdToUpdate}=todoSlice.actions

export  const todoreducer=todoSlice.reducer
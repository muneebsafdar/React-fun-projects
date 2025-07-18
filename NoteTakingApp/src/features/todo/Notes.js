
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    Notes:[

    ],
    idToupdate:"",
    indexToUpdate:0

}

const NotesSlice=createSlice({
    name:"Notes",
    initialState,

    reducers:{
        addNotes:(state,action)=>{
           console.log(state.Notes);
            
            state.Notes.push({id:nanoid(),content:""})
            localStorage.setItem("Notes With Redux",JSON.stringify(state.Notes))
        },
        copyToClipBoard:(state,action)=>{
            state.Notes.map((note)=> (note.id===action.payload) ? 
            window.navigator.clipboard.writeText(note.content)
            :note)
            
        },
        deleteNotes:(state,action)=>{
            console.log(state.Notes);
            
            state.Notes= state.Notes.filter((note)=> note.id !== action.payload)
            localStorage.setItem("Notes With Redux",JSON.stringify(state.Notes))
            
        },
        loadData: (state,action)=>{
            let notes=Array.from(JSON.parse(localStorage.getItem("Notes With Redux")))
            notes=notes.filter((note)=> note.content!=="")
            console.log(notes);
            
            if (notes) {
                state.Notes= notes
            }
        },
        upadateNotes:(state,action)=>{
            
            state.Notes[state.indexToUpdate].content=action.payload
            localStorage.setItem("Notes With Redux",JSON.stringify(state.Notes))

        },

        idAndIndexSetter:(state,action)=>{
            state.idToupdate=action.payload.id
            state.Notes.map((note,index)=> note.id===action.payload ?
                (state.indexToUpdate=index)
                : note
            )
        }
    }
})



export const {addNotes,deleteNotes,copyToClipBoard,loadData,idAndIndexSetter,upadateNotes} = NotesSlice.actions

export const NotesReducers=NotesSlice.reducer
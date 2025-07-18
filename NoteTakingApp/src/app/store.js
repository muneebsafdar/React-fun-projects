import { configureStore } from "@reduxjs/toolkit";
import { NotesReducers } from "../features/todo/Notes";

const store=configureStore({
    reducer:NotesReducers
})

export default store
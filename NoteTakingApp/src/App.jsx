import React,{ useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Notes from './components/Notes'
import { addNotes, loadData } from './features/todo/Notes'


function App() {

  const notes=useSelector(state=>state.Notes)
  
  const dispatch=useDispatch()

  const addNewNote=()=>{
  dispatch(addNotes({}))
  
  }

  useEffect(()=>{
    dispatch(loadData())
  },[])


  return (
    <>
      <div id="app-container" className="app-container">
        <button id="add-note-btn" className="add-note-btn"
        onClick={()=> addNewNote()}
        >+ Add Note</button>

        <div id="notes-container" className="notes-container">
          <Notes/>
        </div>
      </div>
    </>
  )
}

export default App

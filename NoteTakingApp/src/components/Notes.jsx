import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { copyToClipBoard, deleteNotes, idAndIndexSetter,upadateNotes } from '../features/todo/Notes'
import { useEffect } from 'react'


function Notes() {

    let notes=useSelector((state=> state.Notes))
    const dispatch=useDispatch()

    const notesGerator=useCallback(()=>{
        console.log(notes);
        
        notes=notes.map(note => (
            <div key={note.id} id={String(note.id)} className="note-card">
                <div className="note-actions">
                    <button
                     onClick={()=> dispatch(copyToClipBoard(note.id))}
                     className="copy-btn"
                     >Copy</button>
                    <button 
                    onClick={()=> dispatch(deleteNotes(note.id))}
                    className="delete-btn">Delete</button>
                </div>
                <textarea 
                key={note.id}
                onClick={()=>dispatch(idAndIndexSetter(note.id))}
                placeholder="Write your note here..." 
                value={note.content}
                onChange={(e)=>dispatch(upadateNotes(e.target.value))}
                ></textarea>
            </div>  
        ))
        
        console.log(notes);

        return Array.from(notes)
    },[notes])

    useEffect(()=>{
        notesGerator()
    },[notes])

    return (
       <>
       {
        notesGerator()
       }
       </>
    )
}

export default Notes

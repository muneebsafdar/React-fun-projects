import React, { useEffect, useRef, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { addtodo, updateAction, updateIdToUpdate, updatetodo } from '../features/todo/todoSlice'

function AddTod() {

    const dispatch=useDispatch()
    const [input,setInput]=useState('')

    const action=useSelector(state=>state.action)
    const todos=useSelector((state)=> state.todos)
    const idToUpdate=useSelector(state=>state.idToUpdate)
    const inputRef = useRef(null);

    useEffect(()=>{
      if (idToUpdate) {
        const todoToUpdate=todos.filter((todo)=> todo.id===idToUpdate)
        setInput(todoToUpdate[0].text)
        dispatch(updateAction("Update"))
        inputRef.current?.focus();
        
      }

    }
    ,[idToUpdate])


    const addTodoHandler=(e)=>{
        e.preventDefault()

        if (action==='Add'){
            dispatch(addtodo({input}))
            setInput('')
        }else if(action==='Update'){
            dispatch(updatetodo({id:idToUpdate,input}))
            setInput('')
            dispatch(updateAction("Add"))
            dispatch(updateIdToUpdate({id:""}))
        }
        
    }

    return (
    <form onSubmit={addTodoHandler}  className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {action} Todo
      </button>
    </form>
  )
}

export default AddTod

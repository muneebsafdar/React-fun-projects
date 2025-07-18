import React from 'react'

function Buttons(props) {
    
    return (
        <>
            <button 
                className="text-white px-4 py-2 rounded-xl mx-4 my-4" 
                style={{ backgroundColor: props.bgColor }} 
                onClick={  ()=> props.ColorSetter(props.bgColor)}
            >{props.Btn_text}
            </button>
        </>
    )
}

export default Buttons
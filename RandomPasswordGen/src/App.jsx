import React,{ useState ,useCallback ,useEffect , useRef } from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed,setNumberAllowed]=useState(false)
  const [CharAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')
 //use call back
  const paswordGenerator=useCallback(()=>{
    let pass=''
    let passStr='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(NumberAllowed) passStr+="1234567890"
    if(CharAllowed) passStr+="@#$%^&*?/}{!.:;"

    for (let i = 0; i <= length; i++) {
      const randomNum=Math.floor(Math.random() * passStr.length +1)
      pass += passStr.charAt(randomNum)
    }

    setPassword(pass)
  }
  ,[length,NumberAllowed,CharAllowed])
 // use effect
  useEffect(()=>{
    paswordGenerator()
  },
  [length,CharAllowed,NumberAllowed,paswordGenerator])
 // useref
  const inputRef=useRef(null)

  const CopyClip=()=>{
    inputRef.current?.select()
    inputRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='bg-gray-600 w-[50%] rounded-2xl p-4'>
          <p className='text-2xl text-white pb-5'>Password Generator With React</p>
          <div className='flex pb-5'>
            <input className='w-full  p-2 bg-white outline-0 rounded-2xl'
            type="text" readOnly value={password} ref={inputRef}/>

            <button className='bg-blue-600 text-white text-xl p-3 rounded-2xl'
            onClick={CopyClip}
            >Copy</button>

          </div>
          <div>
            <input className=' '
            type="range" min={8} max={100} value={length}
            onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="" className='text-white'>Length({length})</label>

            <input className=' text-2xl ml-5'
            type="checkbox" 
            defaultChecked={CharAllowed}
            onChange={ ()=> {setCharAllowed((prev)=>!prev)}}
            />
            <label htmlFor="character" className=' text-white'>Character</label>

            <input className=' text-2xl ml-5'
            type="checkbox" 
            defaultChecked={NumberAllowed}
            onChange={()=>{setNumberAllowed((prev)=> !prev)}}
            />
            <label htmlFor="Numbers" className='text-white '>Numbers</label>


          </div>
        </div>
      </div>
    </>
  )
}

export default App

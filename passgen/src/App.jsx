import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charactersAllowed,setcharactersAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charactersAllowed) str += "!@#$%^&*()_+~";

    for(let i =0; i <= length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)

    }
    setPassword(pass) 


  },[length,numberAllowed,charactersAllowed,setPassword])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charactersAllowed])

  const copyPasswordToClibboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
     window.navigator.clipboard.writeText(password)

  },[password])


  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-black">
  <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-5 bg-slate-800">

    {/* Title */}
    <h1 className="text-center text-xl font-medium text-gray-200 mb-4">
      Password Generator
    </h1>

    {/* Input + Copy */}
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={password}
        className="flex-1 rounded-md bg-gray-300 text-gray-800 px-4 py-2 outline-none"
        placeholder="Password"
        readOnly
        ref = {passwordRef}
      />
      <button onClick={copyPasswordToClibboard} className="outline-none bg-blue-700 text-white px-3 py-2 rounded-md">
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="flex flex-col gap-3 text-sm text-gray-200">

      {/* Slider */}
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer flex-1"
          onChange={(e) => setLength(e.target.value)}
        />
        <label className="whitespace-nowrap">
          Length: {length}
        </label>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => setnumberAllowed(prev => !prev)}
        />
        <label htmlFor="numberInput">Include Numbers</label>
      </div>
       {/* Checkbox */}
       <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={charactersAllowed}
          id="numberInput"
          onChange={() => setcharactersAllowed(prev => !prev)}
        />
        <label htmlFor="charactersInput">Include Characters</label>
      </div>

    </div>
  </div>
</div>
  </>
  )
}

export default App

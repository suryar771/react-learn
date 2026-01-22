import { useState } from 'react'


function App() {
  const [color,setColor] = useState("white");

  return (
<div
  className="w-screen h-screen duration-200"
  style={{ backgroundColor: color }}
>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-black'>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl'>
      <button onClick={() => setColor("red")}className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"red"}}> 
        red
        </button> 
        <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full text-blue shadow-lg'style={{backgroundColor:"blue"}}> 
        blue
        </button> 
        <button onClick={() => setColor("white")}className='outline-none px-4 rounded-full text-black shadow-lg'style={{backgroundColor:"white"}}> 
        white
        </button> 
        <button onClick={() => setColor("black")}className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"black"}}> 
        black
        </button> 
        <button onClick={() => setColor("lavender")}className='outline-none px-4 rounded-full text-lavender shadow-lg'style={{backgroundColor:"lavender"}}> 
        lavender
        </button> 
        <button onClick={() => setColor("gold")} className='outline-none px-4 rounded-full text-gold shadow-lg'style={{backgroundColor:"gold"}}> 
        gold
        </button> 
      
        <button onClick={() => setColor("orange")}className='outline-none px-4 rounded-full text-orange shadow-lg'style={{backgroundColor:"orange"}}> 
        orange
        </button> 
        <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full text-yellow shadow-lg'style={{backgroundColor:"yellow"}}> 
        yellow
        </button> 

     </div>
     </div>
</div>

  )
}

export default App

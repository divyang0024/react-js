import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div className='bg-white-500 h-screen flex justify-center items-center duration-300' style={{backgroundColor:color}}>
      <div className='p-4 bg-slate-500 rounded-xl flex space-x-2 border-2 border-black shadow-md shadow-black'>
        <button onClick={()=>setColor("rgb(239 68 68)")} className='text-white py-2 px-4 bg-red-500 rounded-lg focus:shadow-inner focus:bg-red-700 focus:shadow-black transition-all duration-300'>red</button>
        <button onClick={()=>setColor("rgb(34 197 94)")} className='text-white py-2 px-4 bg-green-500 rounded-lg focus:shadow-inner focus:bg-green-700 focus:shadow-black transition-all duration-300'>green</button>
        <button onClick={()=>setColor("rgb(59 130 246)")} className='text-white py-2 px-4 bg-blue-500 rounded-lg focus:shadow-inner focus:bg-blue-700 focus:shadow-black transition-all duration-300'>blue</button>
        <button onClick={()=>setColor("rgb(234 179 8)")} className='text-white py-2 px-4 bg-yellow-500 rounded-lg focus:shadow-inner focus:bg-yellow-700 focus:shadow-black transition-all duration-300'>yellow</button>
      </div> 
    </div>
    </>
  )
}

export default App

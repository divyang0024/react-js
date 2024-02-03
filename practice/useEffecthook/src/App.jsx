import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)

let addVal=()=>{
setCounter(counter+1)
}

let subtractVal=()=>{
setCounter(counter-1)
}

  return (
    <>
      <div class="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-yellow-500 gap-4">
        <h1 class="text-5xl">Intial Value : {counter}</h1>
        <input type="button" value="Add" onClick={addVal} class="text-[white] bg-green-500 p-2 rounded-xl focus:shadow-md"/>
        <input type="button" value="Subtract" onClick={subtractVal} class="text-[white] bg-red-500 p-2 rounded-xl focus:shadow-md"/>
      </div>
    </>
  )
}

export default App

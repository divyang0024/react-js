import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    setCounter(prevCounter => prevCounter + 1)//it also accepts a callback,the prevcounter will take the previous state and change it.
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const removeCounter = () => {
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Button counter</h1>
      <h3>Button count : {counter}</h3>
      <button onClick={addCounter}>Add value</button><br />
      <button onClick={removeCounter}>Remove value</button>
    </>
  )
}

export default App

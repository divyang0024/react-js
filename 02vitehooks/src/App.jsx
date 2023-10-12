import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter project</h1>
      <h3>Number of counts : {counter}</h3>

      <button onClick={addValue}>Add value</button><br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

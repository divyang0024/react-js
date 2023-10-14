import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)
  const identity = {
    name: "dina",
    age: "100",
    btnStatus: "visit me"
  };
  return (
    <>
      <h1 className='bg-green-500 text-black p-10 rounded-2xl'>Tailwind CSS</h1>
      <Card cardInfo={identity} />
    </>
  )
}

export default App

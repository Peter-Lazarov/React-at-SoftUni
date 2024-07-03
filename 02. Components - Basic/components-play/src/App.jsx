import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Click from './components/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Click />
    </>
  )
}

export default App

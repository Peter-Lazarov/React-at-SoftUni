import { useState } from 'react';
import './App.css'
import Timer from './components/Timer'
import Effect from './components/Effect';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Timer />
      <Effect />
    </>
  )
}

export default App

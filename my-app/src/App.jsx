import { useState } from 'react'
import Hello from './components/Hello/Hello'
import PackingList from './components/packing-list/PackingList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello name='React'></Hello>
        <PackingList></PackingList>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

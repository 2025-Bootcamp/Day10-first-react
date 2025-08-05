import { useState } from 'react'
import Hello from './components/Hello/Hello'
import PackingList from './components/packing-list/PackingList'
import PackingListZustand from './components/packing-list/PackingListZustand'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showZustand, setShowZustand] = useState(false)

  return (
    <>
      <div>
        <Hello name='React'></Hello>
        
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button 
            onClick={() => setShowZustand(!showZustand)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: showZustand ? '#28a745' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {showZustand ? '显示 useState 版本' : '显示 Zustand 版本'}
          </button>
        </div>

        {showZustand ? <PackingListZustand /> : <PackingList />}
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

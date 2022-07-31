import Hello from './components/hello'
import './App.css'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React! 父组件的num: {num}</p>
        <Hello name='tom' render={temp => <span>我是插槽, 参数是:{temp}</span>} onCustomEvent={setNum}></Hello>
      </header>
    </div>
  )
}

export default App

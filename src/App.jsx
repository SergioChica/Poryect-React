import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Title } from './components/Title/Title'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Title title='good' />
        <h2>No</h2>
      </div>
  )
}

export default App

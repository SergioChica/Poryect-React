import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Title } from './components/Title/Title'
import { Logo } from './components/Logo/Logo'
import { Home } from './components/Pages/Home/Home'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Home />
      </>
  )
}

export default App

import ThemeToggle from './features/ThemeToggle'
import LightSwitch from './components/LightSwitch'
import { useState } from 'react'

function App() {
  const [lsOn, setLSOn] = useState(false)

  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ThemeToggle></ThemeToggle>
        <LightSwitch enabled={lsOn} onToggle={() => {setLSOn(!lsOn)}}></LightSwitch>
      </div>
  )
}

export default App

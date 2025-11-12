import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'

function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ThemeToggle></ThemeToggle>
        <Name></Name>
      </div>
  )
}

export default App

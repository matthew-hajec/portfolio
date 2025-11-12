import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'
import Stats from './sections/Stats'

function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <ThemeToggle></ThemeToggle>
        <Name></Name>

        <main className="mx-auto px-4 mt-8">
          <Stats></Stats>
        </main>

      </div>
  )
}

export default App

import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'
import Stats from './sections/Stats'
import Sidebar from './features/Sidebar'

function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex">
        <Sidebar></Sidebar>

        <main className="px-4 mt-8 flex-1">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
          <Name></Name>

          <Stats></Stats>
        </main>

      </div>
  )
}

export default App

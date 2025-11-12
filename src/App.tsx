import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'
import Stats from './sections/Stats'
import Sidebar from './features/Sidebar'

function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <header>
            <div className="flex justify-end">
              <ThemeToggle />
            </div>
            <Name></Name>
          </header>

          <div className='grid grid-cols-4 gap-4'>
            <div className="col-span-1">
              <Sidebar />
            </div>

            <main className="col-span-3">
              <Stats />
            </main>
          </div>
        </div>
      </div>
  )
}

export default App

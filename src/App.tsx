import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'
import Stats from './sections/Stats'
import Sidebar from './features/Sidebar'
import Introduction from './sections/Introduction'

function App() {
  return (
      <div className="min-h-screen bg-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto pt-12">
          <header className='relative'>
            <Name />
            <div className="absolute top-6 end-0">
              <ThemeToggle />
            </div>
          </header>

          <div className='grid grid-cols-4 gap-8'>
            <div className="col-span-1">
              <Sidebar />
            </div>

            <main className="col-span-3 grid grid-cols-1 gap-8">
              <Introduction />
              <Stats />
              
            </main>
          </div>
        </div>
      </div>
  )
}

export default App

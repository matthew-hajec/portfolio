import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'
import Stats from './sections/Stats'
import Sidebar from './features/Sidebar'
import Introduction from './sections/Introduction'
import Projects from './sections/Projects'

function App() {
  return (
      <div className="
        relative 
        min-h-screen
        bg-[linear-gradient(72deg,rgba(255,255,255,1)_0%,rgba(148,191,255,1)_30%,rgba(129,187,120,1)_54%,rgba(217,174,100,1)_83%,rgba(255,255,255,1)_100%)]
        dark:bg-[linear-gradient(72deg,rgba(17,24,39,1)_0%,rgba(65,85,101,1)_30%,rgba(79,70,229,1)_100%)]
      ">
        {/* Background Circles */}
        <div className='
          fixed
          inset-0
          overflow-hidden
        '>
          <div className="absolute bottom-0 -right-3/4 h-3/1 aspect-square -rotate-45  rounded-full bg-orange-600/10 blur-xl"></div>
          <div className="absolute -bottom-1/2 left-1/4 h-3/4 w-3/4 rounded-full bg-pink-600/15 blur-3xl"></div>
        </div>

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
              <Projects />
              <Stats />
              
            </main>
          </div>
        </div>
      </div>
  )
}

export default App

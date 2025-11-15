import ThemeToggle from './features/ThemeToggle'
import Name from './features/Name'
import Stats from './sections/Stats'
import Sidebar from './features/Sidebar'
import Introduction from './sections/Introduction'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Experience from './sections/Experience'

function App() {
  return (
      <div className="
        relative 
        min-h-screen
        bg-fixed
        bg-[linear-gradient(72deg,rgba(255,255,255,1)_0%,rgba(148,191,255,1)_30%,rgba(129,187,120,1)_54%,rgba(217,174,100,1)_83%,rgba(255,255,255,1)_100%)]
        dark:bg-[linear-gradient(72deg,rgba(17,24,39,1)_0%,rgba(65,85,101,1)_30%,rgba(79,70,219,1)_100%)]
      ">
        {/* Background Circles */}
        <div className='
          fixed
          inset-0
          overflow-hidden
        '>
          <div className="absolute bottom-0 -right-3/4 h-3/1 aspect-square -rotate-45  rounded-full bg-orange-600/15 blur-xl"></div>
          <div className="absolute -bottom-1/2 left-1/4 h-3/4 w-3/4 rounded-full bg-pink-600/15 blur-3xl"></div>
          <div className="absolute top-0 -left-1/5 h-2/3 w-2/3 rounded-full bg-green-600/5 blur-2xl"></div>
          <div className="absolute top-1/2 end-0 h-1/2 w-1/2 rounded-full bg-blue-600/10 blur-2xl"></div>
          <div className="absolute bottom-0 left-1/4 h-1/3 w-1/3 rounded-full bg-purple-600/10 blur-2xl"></div>
          <div className="absolute top-1/3 left-0 h-1/2 w-3/4 rounded-full bg-yellow-600/10 blur-2xl"></div>
          <div className="absolute top-0 right-0 h-2/3 w-2/3 rounded-full bg-blue-600/5 blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 pb-6 px-6">
          <header className='relative'>
            <Name />
            <div className="absolute top-6 end-0">
              <ThemeToggle />
            </div>
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-4 gap-x-8 gap-y-10'>
            <div className="col-span-1">
              <Sidebar />
            </div>

            <main className="
              col-span-1
              lg:col-span-4
              xl:col-span-3
              grid grid-cols-1 gap-y-10
            ">
              <Introduction />
              <Projects />
              <Skills />
              <Education />
              <Experience />
              <Stats />
              
              
            </main>
          </div>
        </div>
      </div>
  )
}

export default App

export default function Name() {
  return (
    <div className="flex justify-center mb-12">
      <h1 
        className="
          text-7xl font-bold font-['Stack_Sans_Notch']
          bg-linear-to-r from-blue-700 via-purple-600 to-pink-500 
          dark:from-blue-500 dark:via-purple-600 dark:to-pink-400
          bg-clip-text text-transparent 
          animate-gradient-pan"
        style={{ backgroundSize: '200% 100%' }}
      >
        Matthew Hajec
      </h1>
    </div>
  )
}
export default function Sidebar() {
  return (
    <aside className="w-full bg-gray-100 dark:bg-gray-800 p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:underline">Home</a>
          </li>
          <li className="mb-4">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:underline">About</a>
          </li>
          <li className="mb-4">
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:underline">Projects</a>
          </li>
          <li className="mb-4">
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
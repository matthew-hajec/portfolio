import Card from "../components/Card";

export default function Sidebar() {
  return (
    <Card>
      <aside className="w-full">
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#introduction" className="
                text-gray-700 dark:text-gray-300 
                hover:underline
              ">Introduction</a>
            </li>
            <li className="mb-4">
              <a href="#stats" className="
                text-gray-700 dark:text-gray-300 
                hover:underline
              ">Stats</a>
            </li>
          </ul>
        </nav>
      </aside>
    </Card>
  )
}
import Card from "../components/Card";
import Text from "../components/typography/Text";

export default function Sidebar() {
  return (
    <Card>
      <aside className="w-full">
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#introduction">
                <Text elementType="p" className="hover:underline font-bold">
                  Introduction
                </Text>
              </a>
            </li>
            <li className="mb-4">
              <a href="#stats">
                <Text elementType="p" className="hover:underline font-bold">
                  Stats
                </Text>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </Card>
  )
}
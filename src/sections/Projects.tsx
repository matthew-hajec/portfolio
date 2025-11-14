import Card from "../components/Card";
import Text from "../components/typography/Text";

export default function Projects() {
  return (
    <Card id="projects">
      <Text elementType="h2" className="text-4xl font-semibold mb-4">
        Projects
      </Text>

      <div className="
        grid grid-cols-3 gap-4
      ">
        <Card hoverEffect paddingSize={6}>
          <Text elementType="h3" className="text-2xl font-medium mb-2">
            ChessQuo
          </Text>
          <Text className="text-sm">
            ChessQuo is an online, real-time multiplayer Chess application built with the Phoenix Web Framework (including LiveView) and TailwindCSS.
          </Text>
        </Card>

        <Card hoverEffect paddingSize={6}>
          <Text elementType="h3" className="text-2xl font-medium mb-2">
            CragForecast
          </Text>
          <Text className="text-sm">
            CragForecast helps rock climbers by making it easy to compare weather information for nearby climbing areas. Built with React, TailwindCSS, and Elixir.
          </Text>
        </Card>

        <Card hoverEffect paddingSize={6}>
          <Text elementType="h3" className="text-2xl font-medium mb-2">
            Project Three
          </Text>
          <Text>
            Description of project three.
          </Text>
        </Card>

      </div>
    </Card>
  )
}
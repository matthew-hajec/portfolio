import Card from "../components/Card";
import Text from "../components/typography/Text";
import Project from "../features/Project";

export default function Projects() {
  return (
    <Card id="projects">
      <Text elementType="h2" className="text-3xl font-semibold mb-8">
        Projects
      </Text>

      <div className="
        grid grid-cols-1 gap-4
        md:grid-cols-3
      ">
        <Project
          title="ChessQuo"
          description="ChessQuo is an online, real-time multiplayer Chess application built with the Phoenix Web Framework (including LiveView) and TailwindCSS."
          githubUrl="https://github.com/matthew-hajec/chess-quo"
          liveUrl="https://chessquo.com"
        />
        <Project
          title="CragForecast"
          description="CragForecast helps rock climbers by making it easy to compare weather information for nearby climbing areas. Built with React, TailwindCSS, and Elixir."
          githubUrl="https://github.com/matthew-hajec/crag-forecast-api"
          liveUrl="https://cragforecast.com"
        />
        <Project
          title="Project Three"
          description="Description of project three."
        />
      </div>
    </Card>
  )
}

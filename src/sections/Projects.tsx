import Card from "../components/Card";
import Text from "../components/typography/Text";
import Project from "../features/Project";
import chessQuoScreenshot from "../assets/chessquo.png";
import cragForecastScreenshot from "../assets/cragforecast.png";
import todayIWillScreenshot from "../assets/todayiwill.png";

export default function Projects() {
  return (
    <Card id="projects">
      <Text elementType="h2" className="text-3xl font-semibold mb-6">
        Projects
      </Text>

      <div className="
        grid grid-cols-1 gap-8
        sm:grid-cols-2
        md:grid-cols-2
        
      ">
        <Project
          title="ChessQuo"
          description="ChessQuo is an online, real-time multiplayer Chess application built with the Phoenix Web Framework (including LiveView) and TailwindCSS."
          githubUrl="https://github.com/matthew-hajec/chess-quo"
          liveUrl="https://chessquo.com"
          imageSrc={chessQuoScreenshot}
        />
        <Project
          title="CragForecast"
          description="CragForecast helps rock climbers by making it easy to compare weather information for nearby climbing areas. Built with React, TailwindCSS, and Elixir."
          githubUrl="https://github.com/matthew-hajec/crag-forecast-api"
          liveUrl="https://cragforecast.com"
          imageSrc={cragForecastScreenshot}
        />
        <Project
          title="Today I Will"
          description="Today I Will is a minimalist productivity tool designed to help users focus on one task at a time. It featues a very simple interface with a music option, and written with vanilla HTML, CSS, and JavaScript."
          githubUrl="https://github.com/velocityforge/today-i-will"
          liveUrl="https://bangrew.com"
          imageSrc={todayIWillScreenshot}
        />
      </div>
    </Card>
  )
}

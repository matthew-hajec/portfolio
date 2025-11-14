import Card from "../components/Card"
import Text from "../components/typography/Text"
import blackGithubLogo from '../assets/github-mark.svg'
import whiteGithubLogo from '../assets/github-mark-white.svg'
import blackOpenInNew from '../assets/open-in-new.svg'
import whiteOpenInNew from '../assets/open-in-new-white.svg'

type ProjectProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Project(props: ProjectProps) {

  return (
    <Card hoverEffect paddingSize={6} additionalClasses="flex flex-col justify-between">
      <div className="mb-4">
        <Text elementType="h3" className="text-2xl font-medium mb-2">
          {props.title}
        </Text>
        <Text className="text-sm">
          {props.description}
        </Text>
      </div>
      <div className="flex justify-around">
        <a href={props.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <div className="sr-only">Live Project</div>
          <div className="dark:hidden"><img src={blackOpenInNew} alt="Open in new tab icon" className="h-9 w-9 mt-4 "/></div>
          <div className="hidden dark:block"><img src={whiteOpenInNew} alt="Open in new tab icon" className="h-9 w-9 mt-4 "/></div>

        </a>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <div className="sr-only">GitHub Repository</div>
          <div className="dark:hidden"><img src={blackGithubLogo} alt="GitHub Logo" className="h-8 w-8 mt-4"/></div>
          <div className="hidden dark:block"><img src={whiteGithubLogo} alt="GitHub Logo" className="h-8 w-8 mt-4"/></div>
        </a>
      </div>
    </Card>
  )
}
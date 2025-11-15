import Card from "../components/Card"
import Text from "../components/typography/Text"
import ThemedImage from "../components/ThemedImage"
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
  imageSrc?: string;
}

export default function Project(props: ProjectProps) {
  return (
    <Card hoverEffect padded={false} additionalClasses="flex flex-col justify-between p-6">
      <div className="mb-4">
        <Text elementType="h3" className="text-2xl font-medium mb-4">
          {props.title}
        </Text>
        {props.imageSrc && (
          <img 
            src={props.imageSrc} alt={`${props.title} screenshot`} 
            className="mb-4 rounded-lg h-36 w-full object-cover border border-gray-200 dark:border-gray-700" 
          />
        )}
        <Text className="text-sm">
          {props.description}
        </Text>
      </div>
      <div className="flex justify-around">
        <a href={props.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <div className="sr-only">Live Project</div>
          <ThemedImage lightSrc={blackOpenInNew} darkSrc={whiteOpenInNew} alt="Open in new tab icon" className="h-9 w-9 mt-4" />
        </a>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <div className="sr-only">GitHub Repository</div>
          <ThemedImage lightSrc={blackGithubLogo} darkSrc={whiteGithubLogo} alt="GitHub Logo" className="h-8 w-8 mt-4" />
        </a>
      </div>
    </Card>
  )
}
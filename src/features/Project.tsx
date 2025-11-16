import Card from "../components/Card"
import Text from "../components/typography/Text"
import Icon from "../components/Icon"


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
            className="mb-4 rounded-lg h-44 w-full object-cover border border-gray-200 dark:border-gray-700" 
          />
        )}
        <Text className="text-sm">
          {props.description}
        </Text>
      </div>
      <div className="flex justify-around">
        <a href={props.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <div className="sr-only">Live Project</div>
          <Icon iconName="open-as" className="h-9 w-9 mt-4" />
        </a>
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <div className="sr-only">GitHub Repository</div>
          <Icon iconName="github" className="h-8 w-8 mt-4" />
        </a>
      </div>
    </Card>
  )
}
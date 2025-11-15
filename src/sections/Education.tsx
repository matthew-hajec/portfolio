import Card from "../components/Card";
import Icon from "../components/Icon";
import Text from "../components/typography/Text";

export default function Education() {
  return (
    <>
    <Card id="education">
      <Text elementType="h2" className="text-3xl font-semibold mb-6">
        Education
      </Text>
      <Card padded={false} additionalClasses="p-4">
      <div className="flex items-center flex-col justify-around md:flex-row gap-8">
        <Icon iconName="mga" className="w-75" />
        <Text className="text-md">
            <span className="font-bold">Macon, GA</span><br />
            <span className="font-semibold">Bachelor of Science in Information Technology</span><br />

            Graduating December 2025
        </Text>
      </div>
      </Card>
    </Card>
    </>
  )
}

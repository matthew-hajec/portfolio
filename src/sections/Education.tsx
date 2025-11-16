import Card from "../components/Card";
import Icon from "../components/Icon";
import Text from "../components/typography/Text";

export default function Education() {
  return (
    <>
    <Card id="education">
      <Text elementType="h2" className="text-2xl uppercase tracking-[0.2em] font-normal mb-6">
        Education
      </Text>
      <Card padded={false} additionalClasses="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Icon iconName="mga" className="w-75" />
          </div>
          <div className="flex justify-start items-center">
            <Text className="text-md">
              <span className="font-bold">Macon, GA</span><br />
              <span className="font-semibold">Bachelor of Science in Information Technology</span><br />
              Graduating December 2025
            </Text>
          </div>
        </div>
      </Card>
    </Card>
    </>
  )
}

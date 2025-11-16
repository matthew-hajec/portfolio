import Card from "../components/Card";
import Icon from "../components/Icon";
import Text from "../components/typography/Text";

export default function Experience() {
  return (
    <>
    <Card id="experience">
      <Text elementType="h2" className="text-2xl uppercase tracking-[0.2em] font-normal mb-6">
          Experience
      </Text>
      <Card padded={false} additionalClasses="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Icon iconName="bisi" className="w-55" />
          </div>
          <div className="flex justify-start items-center">
            <Text className="text-md">
              <span className="font-bold">Warner Robins, GA</span><br />
              <span className="font-semibold">Business Analyst I</span><br />
              October 2021 - January 2023
            </Text>
          </div>
        </div>
      </Card>
    </Card>
    </>
  )
}

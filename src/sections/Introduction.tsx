import Card from "../components/Card";
import Text from "../components/typography/Text";

export default function Introduction() {
  return (
    <>
      {/* The id "introduction" is applied to the `body` element so it scrolls all the way to the top */}
    <Card>
      <Text elementType="h2" className="text-3xl font-semibold mb-4">
        Introduction
      </Text>
      <Text>Hello, My name is Matthew</Text>
    </Card>
    </>
  )
}

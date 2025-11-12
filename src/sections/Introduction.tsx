import Card from "../components/Card";
import Text from "../components/typography/Text";

export function Introduction() {
  return (
    <Card>
      <Text elementType="h2" className="text-4xl font-bold mb-4">
        Introduction
      </Text>
      <Text>Hello, My name is Matthew</Text>
    </Card>
  )
}

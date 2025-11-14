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
      <Card padded={false} additionalClasses="p-4">
      <Text>
        Hello! I'm Matthew Hajec, a software developer specializing in building web applications with a focus on Elixir and JavaScript/TypeScript. I enjoy creating efficient, scalable, and user-friendly solutions.
      </Text>
      </Card>
    </Card>
    </>
  )
}

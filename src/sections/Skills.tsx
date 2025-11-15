import Card from "../components/Card";
import Icon, { type IconName } from "../components/Icon";
import Text from "../components/typography/Text";

function SkillItem({ skill, iconName }: { skill: string, iconName: IconName }) {
  return (
    <li className="
      flex flex-col items-center 
      hover:scale-105 transition-transform duration-300 
      p-4
    ">
      <Icon iconName={iconName} className="h-12 w-12 mb-2"/>
      <Text elementType="p" className="text-sm text-center">
        {skill}
      </Text>
    </li>
  )
}

export default function Skills() {
  return (
    <>
    <Card id="skills">
      <Text elementType="h2" className="text-3xl font-semibold mb-6">
        Skills
      </Text>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <SkillItem skill="HTML5" iconName="html5" />
        <SkillItem skill="CSS3" iconName="css3" />
        <SkillItem skill="JavaScript" iconName="javascript" />
        <SkillItem skill="TypeScript" iconName="typescript" />
        <SkillItem skill="Node.js" iconName="nodejs" />
        <SkillItem skill="React" iconName="react" />
        <SkillItem skill="Tailwind CSS" iconName="tailwindcss" />
        <SkillItem skill="Phoenix" iconName="phoenix" />
        <SkillItem skill="Elixir" iconName="elixir" />
        <SkillItem skill="SQL" iconName="sql" />
        <SkillItem skill="Git" iconName="git" />
        <SkillItem skill="Docker" iconName="docker" />
      </ul>
    </Card>
    </>
  )
}

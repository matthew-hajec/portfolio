import Card from "../components/Card";
import Text from "../components/typography/Text";

function SkillItem({ skill, imageUrl }: { skill: string, imageUrl: string }) {
  return (
    <li className="
      flex flex-col items-center 
      hover:scale-105 transition-transform duration-300 
      p-4
    ">
      <img src={imageUrl} alt={`${skill} logo`} className="h-12 w-12 mb-2"/>
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
      <Text elementType="h2" className="text-3xl font-semibold mb-4">
        Skills
      </Text>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <SkillItem skill="HTML5" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
        <SkillItem skill="CSS3" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
        <SkillItem skill="JavaScript" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
        <SkillItem skill="TypeScript" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
        <SkillItem skill="Node.js" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
        <SkillItem skill="React" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
        <SkillItem skill="Tailwind CSS" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" />
        <SkillItem skill="Phoenix" imageUrl="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/phoenix/phoenix-original.svg" />
        <SkillItem skill="Elixir" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg" />
        <SkillItem skill="SQL" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" />
        <SkillItem skill="Git" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" />
        <SkillItem skill="Docker" imageUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" />
      </ul>
    </Card>
    </>
  )
}

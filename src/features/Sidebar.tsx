import Card from "../components/Card";
import Text from "../components/typography/Text";

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href}>
        <div className="
          p-2
          text-center
          rounded-lg
          border dark:border-gray-100/20 border-gray-900/20
          cursor-pointer
          hover:bg-gray-100/50 dark:hover:bg-gray-800/50
          hover:scale-101
          transition-all ease-in-out duration-200
          shadow-md shadow-gray-500/10

        ">
          <Text elementType="p">
            {children}
          </Text>
        </div>
      </a>
    </li>  
  );
}

export default function Sidebar() {
  return (
    <div className="lg:sticky lg:top-6  lg:h-[calc(100vh-3rem)]">
      <Card padded={false} additionalClasses="h-full p-6">
        <aside className="w-full">
          <nav>
            <ul className="flex flex-col gap-4">
              <LinkItem href="#introduction">Introduction</LinkItem>
              <LinkItem href="#projects">Projects</LinkItem>
              <LinkItem href="#skills">Skills</LinkItem>
              <LinkItem href="#stats">Statistics</LinkItem>
            
            </ul>
          </nav>
        </aside>
      </Card>
    </div>
  )
}
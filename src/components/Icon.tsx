import openInNewWhite from '../assets/open-in-new-white.svg'
import openInNewBlack from '../assets/open-in-new.svg'
import arrowDownWhite from '../assets/arrow-down-white.svg'
import arrowDownBlack from '../assets/arrow-down.svg'
import githubWhite from '../assets/github-mark-white.svg'
import githubBlack from '../assets/github-mark.svg'
import mga from '../assets/mga.png'
import bisi from '../assets/bisi.webp'

type GenericIcon = 'open-as' | 'caret'
type WebsiteIcon = 'github' | 'linkedin'
type DevIcon = 'html5' | 'css3' | 'javascript' | 'typescript' | 'nodejs' | 'react' | 'tailwindcss' | 'phoenix' | 'elixir' | 'sql' | 'git' | 'docker'
type PersonalIcon = 'mga' | 'bisi'
export type IconName = GenericIcon | WebsiteIcon | DevIcon | PersonalIcon

type IconProps = {
  iconName: IconName;
  className?: string;
};

const iconMap: Record<IconName, { light: string; dark: string; alt: string }> = {
  'open-as': {
    light: openInNewBlack,
    dark: openInNewWhite,
    alt: 'Open in new tab icon',
  },
  'caret': {
    light: arrowDownBlack,
    dark: arrowDownWhite,
    alt: 'Caret icon',
  },
  'github': {
    light: githubBlack,
    dark: githubWhite,
    alt: 'GitHub icon',
  },
  'linkedin': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg',
    alt: 'LinkedIn icon',
  },
  'html5': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    alt: 'HTML5 icon',
  },
  'css3': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    alt: 'CSS3 icon',
  },
  'javascript': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    alt: 'JavaScript icon',
  },
  'typescript': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    alt: 'TypeScript icon',
  },
  'nodejs': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js icon',
  },
  'react': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    alt: 'React icon',
  },
  'tailwindcss': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind CSS icon',
  },
  'phoenix': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/phoenix/phoenix-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/phoenix/phoenix-original.svg',
    alt: 'Phoenix Framework icon',
  },
  'elixir': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg',
    alt: 'Elixir icon',
  },
  'sql': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    alt: 'SQL icon',
  },
  'git': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    alt: 'Git icon',
  },
  'docker': {
    light: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    dark: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    alt: 'Docker icon',
  },
  'mga': {
    light: mga,
    dark: mga,
    alt: 'Matthew Hajec Gaming Apparel logo',
  },
  'bisi': {
    light: bisi,
    dark: bisi,
    alt: 'Bisi Clothing logo',
  },
}


export default function Icon({ iconName, className }: IconProps) {
  const icon = iconMap[iconName];
  
  return (
    <>
      <div className="dark:hidden">
        <img src={icon.light} alt={icon.alt} className={className} />
      </div>
      <div className="hidden dark:block">
        <img src={icon.dark} alt={icon.alt} className={className} />
      </div>
    </>
  );
}
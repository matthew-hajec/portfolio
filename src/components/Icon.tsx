import openInNewWhite from '../assets/open-in-new-white.svg'
import openInNewBlack from '../assets/open-in-new.svg'
import githubWhite from '../assets/github-mark-white.svg'
import githubBlack from '../assets/github-mark.svg'

type GenericIcons = 'open-as'
type WebsiteIcons = 'github'
type AllIcons = GenericIcons | WebsiteIcons

type IconProps = {
  iconName: AllIcons;
  className?: string;
};

const iconMap: Record<AllIcons, { light: string; dark: string; alt: string }> = {
  'open-as': {
    light: openInNewBlack,
    dark: openInNewWhite,
    alt: 'Open in new tab icon',
  },
  'github': {
    light: githubBlack,
    dark: githubWhite,
    alt: 'GitHub icon',
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
import Card from "../components/Card";
import Icon, { type IconName } from "../components/Icon";
import Text from "../components/typography/Text";

type LinkItemProps = {
  href: string;
  label: string;
};

const primaryLinks: LinkItemProps[] = [
  { href: "#introduction", label: "Introduction" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#stats", label: "Statistics" },
];

const socialLinks: { href: string; icon: IconName; label: string }[] = [
  { href: "https://github.com/matthew-hajec", icon: "github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/matthew-hajec/", icon: "linkedin", label: "LinkedIn" },
];

function LinkItem({ href, label }: LinkItemProps) {
  const isExternal = href.startsWith("http");

  return (
    <li>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group block"
      >
          <Card border={false} additionalClasses="
            flex items-center justify-between
            rounded-2xl px-4 py-3
            backdrop-blur-xl
            border border-white/40 dark:border-gray-700/30
            group-hover:-translate-y-0.5 
          ">
            <Text elementType="p" className="text-sm font-medium tracking-wide text-gray-700 dark:text-gray-100">
              {label}
            </Text>
            <span className="
              h-1.5 w-1.5 rounded-full
              bg-linear-to-r from-blue-400 via-purple-400 to-pink-400
              opacity-70 group-hover:opacity-100
              transition-opacity duration-300
            " />
          </Card>
      </a>
    </li>
  );
}

export default function Sidebar() {
  return (
    <div className="lg:sticky lg:top-6  lg:h-[calc(100vh-3rem)]">
      <Card padded={false} additionalClasses="h-full p-6">
        <aside className="w-full h-full flex flex-col gap-10">
          <section className="space-y-3">
            <Text elementType="p" className="uppercase tracking-[0.3em] text-sm">
              Navigation
            </Text>
            <nav>
              <ul className="flex flex-col gap-4">
                {primaryLinks.map((link) => (
                  <LinkItem key={link.href} {...link} />
                ))}
              </ul>
            </nav>
          </section>

          <section className="space-y-4">
            <Text elementType="p" className="uppercase tracking-[0.3em] text-sm">
              Availability
            </Text>
            <Card padded={false} additionalClasses="p-2">
              <Text elementType="p" className="text-sm text-gray-600 dark:text-gray-300">
                Open for full-time roles and freelance/contract work. 
              </Text>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-xs font-semibold">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Currently available
              </div>
            </Card>
          </section>

          <section className="mt-auto space-y-4">
            <Text elementType="p" className="uppercase tracking-[0.3em] text-sm">
              Connect
            </Text>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <Card padded={false} key={social.href} additionalClasses="
                  flex flex-col items-center justify-center aspect-square
                  transition-transform duration-300 hover:-translate-y-1
                ">
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="
                    //   flex flex-col items-center justify-center gap-2
                    //   rounded-2xl border border-white/40 dark:border-gray-700/40
                    //   bg-white/50 dark:bg-gray-900/30 backdrop-blur-xl
                    //   py-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/70 dark:hover:bg-gray-900/50
                    // "
                  >
                    <Icon iconName={social.icon} className="h-10" />
                    <span className="text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300">
                      {social.label}
                    </span>
                  </a>
                </Card>
              ))}
            </div>
          </section>
        </aside>
      </Card>
    </div>
  )
}
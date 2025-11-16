import React from "react";
import MouseFollowingDiv from "./MouseFollowingDiv";

type CardProps = {
  children: React.ReactNode
  hoverEffect?: boolean
  padded?: boolean
  additionalClasses?: string

} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, hoverEffect=true, padded=true, additionalClasses='', ...props }: CardProps) {
  const parentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} className={`
      w-full
      ${padded ? 'p-8' : ''}
      ${hoverEffect ? `
        hover:bg-white/25 hover:shadow-white/30
        dark:hover:bg-gray-800/50 dark:hover:shadow-black/30

        transition-all ease-in-out duration-500
        ` : ''}
      rounded-xl shadow-lg
      shadow-white/12 dark:shadow-black/20
      border-t-4 border-s-4 border-b border-l border-white/1 dark:border-t-6 dark:border-s-6 dark:border-gray-800/7
      bg-white/40 dark:bg-gray-800/60
      backdrop-blur-xl
      overflow-hidden
      ${additionalClasses}
    `} 
    {...props}>
      <MouseFollowingDiv parentRef={parentRef} className="
        w-700 h-700
        bg-[radial-gradient(circle,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_60%)]
        rounded-full
        mix-blend-multiply
        blur-2xl
        animate-all
      " />
      {children}
    </div>
  )

}
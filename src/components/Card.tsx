type CardProps = {
  children: React.ReactNode
  hoverEffect?: boolean
  padded?: boolean
  additionalClasses?: string

} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, hoverEffect, padded=true, additionalClasses='', ...props }: CardProps) {
  return (
    <div className={`
      w-full
      ${padded ? 'p-8' : ''}
      ${hoverEffect ? `
        hover:bg-white/25 hover:shadow-white/30
        dark:hover:bg-gray-800/60 dark:hover:shadow-black/30

        transition-all ease-in-out duration-500
        ` : ''}
      rounded-xl shadow-lg
      shadow-white/12 dark:shadow-black/20
      border border-white/20 dark:border-gray-700
      bg-white/20 dark:bg-gray-800/40
      backdrop-blur-xl
      ${additionalClasses}
    `} {...props}>
      {children}
    </div>
  )
}
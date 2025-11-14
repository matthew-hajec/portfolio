type CardProps = {
  children: React.ReactNode
  hoverEffect?: boolean
  paddingSize?: number

} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, hoverEffect, paddingSize=8, ...props }: CardProps) {
  return (
    <div className={`
      w-full
      p-${paddingSize}
      ${hoverEffect ? `
        hover:bg-white/25 transition-all ease-in-out duration-500
        hover:shadow-white/30
        ` : ''}
      rounded-xl shadow-lg
      shadow-white/12 dark:shadow-black/20
      border border-white/20 dark:border-gray-700
      bg-white/20 dark:bg-gray-800/40
      backdrop-blur-xl
    `} {...props}>
      {children}
    </div>
  )
}
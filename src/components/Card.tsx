export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      w-full
      p-8
      rounded-xl shadow-lg
      shadow-white/12 dark:shadow-black/20
      border border-white/20 dark:border-gray-700
      bg-white/20 dark:bg-gray-800/40
      backdrop-blur-xl
    ">
      {children}
    </div>
  )
}
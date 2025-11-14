import Text from "./typography/Text"

type ToggleProps = {
  isChecked: boolean
  onChange: (checked: boolean) => void
  children?: React.ReactNode
  selectable?: boolean
}

export default function Toggle({isChecked, onChange, children, selectable = true}: ToggleProps) {
  return (
    <label className={`inline-flex items-center cursor-pointer ${selectable ? '' : 'select-none'}`}>
      <input type="checkbox" checked={isChecked} onChange={e => onChange(e.target.checked)} className="sr-only peer"></input>
      <div className="
        relative w-13 h-7
        bg-white/50 dark:bg-gray-700/50
        dark:border-gray-600
        shadow-lg
        shadow-white/12 dark:shadow-black/20
        rounded-full 

        peer 
        peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
        peer-checked:bg-blue-600/50
        peer-checked:after:start-7 rtl:peer-checked:after:-translate-x-full after:content-[''] 
        

        after:absolute
        after:bg-white/80 dawgdark:after:bg-white/50
        after:top-1 after:start-1 after:rounded-full after:h-5 after:w-5 after:transition-all 
        
       "></div>
      <Text elementType="span" className="ms-3 text-sm font-bold">{children}</Text>
    </label>    
  )
}
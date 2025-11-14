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
        bg-white/20
        border border-white/20 dark:border-blue-600/30
        shadow-sm shadow-white/30 dark:shadow-blue-600/30

        rounded-full 

        peer 
        peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
        peer-checked:bg-blue-700/70
        peer-checked:after:start-7 rtl:peer-checked:after:-translate-x-full after:content-[''] 
        

        after:absolute
        after:bg-white/80 dark:after:bg-gray-800/40
        dark:after:border dark:after:border-gray-800/40
        after:top-1 after:start-1 after:rounded-full after:h-5 after:w-5 after:transition-all 
        
       "></div>
      <Text elementType="span" className="ms-3 text-sm font-bold">{children}</Text>
    </label>    
  )
}
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
      <div className="relative w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-gray-200 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      <Text elementType="span" className="ms-3 text-sm font-bold">{children}</Text>
    </label>    
  )
}
import { useState } from "react";
import Toggle from "../components/Toggle";

export default function ThemeToggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setIsChecked(checked);
  }

  return (
    <Toggle isChecked={isChecked} onChange={handleChange} selectable={false}>
      {isChecked ? "Dark Mode" : "Light Mode"}
    </Toggle>
  )
}
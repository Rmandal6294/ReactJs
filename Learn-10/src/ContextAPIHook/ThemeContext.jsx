import { createContext, useState } from "react"

export const ThemeExport = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeExport.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeExport.Provider>
    </div>
  )
}

export default ThemeContext

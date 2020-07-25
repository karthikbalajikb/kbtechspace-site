import { useState, useEffect } from 'react'

const useLocalStorage = () => {
  const DEFAULT_THEME = 'light';
  const [theme, setTheme] = useState(DEFAULT_THEME)
  useEffect(() => {
    setTheme(localStorage.getItem('THEME') || DEFAULT_THEME);
  }, [])

  const setCurrentTheme = value => {
    localStorage.setItem('THEME', value)
    setTheme(value)
  }

  return {
    theme,
    setCurrentTheme,
  }
}

export default useLocalStorage

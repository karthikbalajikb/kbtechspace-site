import { useState, useEffect } from 'react'

const useLocalStorage = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    setTheme(localStorage.getItem('THEME'))
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

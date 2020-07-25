import { useState, useEffect } from 'react';

const useLocalStorage = () => {
    const currentTheme = localStorage.getItem('THEME');

    const setCurrentTheme = (value) => localStorage.setItem('THEME', value)
    return {
        currentTheme,
        setCurrentTheme
    }
}

export default useLocalStorage;

import React from "react";
import useLocalStorage from 'use-local-storage'

const Header = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
      }

  return  <div data-theme={theme}>

      
      
    
      
      
      </div> ;
};

export default Header;
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

//create hook that sets and persists dark mode
export const useDarkMode = () => {
    //use useLocalStorage to save the value of our darkModeValue
    const [darkModeValue, setDarkModeValue] = useLocalStorage('darkModeStatus');

    //set dark-mode class on body element
    useEffect(() => {
        //if darkModeValue from useLocalStorage is true, add dark-mode class
        if (darkModeValue === true) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            //if darkModeValue from useLocalStorage is false, remove dark-mode class
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkModeValue]); //this should only run when darkModeValue changes

    //we should probably return darkModeValue and setDarkModeValue in an array
    return [darkModeValue, setDarkModeValue];
}
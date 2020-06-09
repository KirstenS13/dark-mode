import { useState } from 'react';
//don't need to import React because there is no JSX?

//export hook as named export
export const useLocalStorage = (key, initialValue) => {
    //set state in this hook
    const [storedValue, setStoredValue] = useState(() => {
        //let item be the value that exists in localStorage with key
        const item = window.localStorage.getItem(key);
        //check if that key:value pair (item) exists in localStorage
        //if yes, parse it and return it
        //if no, return the initialValue that was passed in to the hook
        return item ? JSON.parse(item) : initialValue;
        //remember, parsing turns a json string into javascript
        //JSON comes in as a string, so it must be translated into JS
    });
    
    //make a function to set the stored value to state and to localStorage
    const setValue = value => { //I think value is the item that was returned above
        //set value to state
        setStoredValue(value);
        //set value to localStorage (give it the key and the new value)
        window.localStorage.setItem(key, JSON.stringify(value));
        //remember, stringify turns javascript into a json string
    }

    //give back the storedValue and the setValue function (that updates the storedValue)
    return [storedValue, setValue];
}
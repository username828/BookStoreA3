import { useState,useEffect } from "react";
import Button from "./Button";

export default function Theme(){
    const [theme,setTheme]=useState('light')

    useEffect(()=>{
        const storedTheme=localStorage.getItem('theme')
        if(storedTheme){
            setTheme(storedTheme);
            document.body.setAttribute('data-theme',storedTheme)
        }

    },[])

    const toggleTheme=()=>{
        const newTheme=theme==='light' ? 'dark':'light';
        setTheme(newTheme)
        localStorage.setItem('theme',newTheme)
        document.body.setAttribute('data-theme',newTheme)
    }

    return(
        <Button onClick={toggleTheme}>
            {theme==='light' ? 'Dark Mode': 'Light Mode'}
        </Button>
    )
}
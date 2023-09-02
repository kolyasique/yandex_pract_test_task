import React, { useEffect, useState } from 'react'

type Props = {}

export default function ThemeChange({}: Props) {

    const [theme , setTheme] =useState('light')

    useEffect(()=>{
        const themeElement = localStorage.getItem('theme')
        setTheme(themeElement)
        document.documentElement.classList.remove('dark', 'light', 'red', 'blue', 'green')
        document.documentElement.classList.add(themeElement)
        document.querySelector('.theme').addEventListener('click', (event:any)=>{
            if (event.target.nodeName === 'INPUT'){
                console.log('SLIVA')
                setTheme(event.target.value)
                localStorage.setItem('theme', event.target.value)
                document.documentElement.classList.remove('dark', 'light', 'red', 'blue', 'green')
                document.documentElement.classList.add(event.target.value)
            }
        })
    },[])

   useEffect(()=>{
    console.log(theme)
   },[theme])

    
  return (
    <div>
        <label><input type="radio" name='theme' value='dark' checked={theme === 'dark' ? true : null}/>Темная</label>
        <label><input type="radio" name='theme' value='light' checked={theme === 'light' ? true : null}/>Светлая</label>
        <label><input type="radio" name='theme' value='red' checked={theme === 'red' ? true : null}/>Красная</label>
        <label><input type="radio" name='theme' value='blue' checked={theme === 'blue' ? true : null}/>Синяя</label>
        <label><input type="radio" name='theme' value='green' checked={theme === 'green' ? true : null}/>Зеленая</label>
    </div>
  )
}
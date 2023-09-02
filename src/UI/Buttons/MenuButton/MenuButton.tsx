import React from 'react'
import cl from './style.module.scss'
type Props = {
    title:string
}

export default function MenuButton({title}: Props) {
  return (
    <button type='button' className={cl.menubutton}>{title}</button>
  )
}
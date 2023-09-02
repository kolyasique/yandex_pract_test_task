import React from 'react'
import cl from './style.module.scss'
type Props = {
    text:string
}

export default function StandardParagraph({text}: Props) {
  return (
    <p className={cl.paragraph}>{text}</p>
  )
}
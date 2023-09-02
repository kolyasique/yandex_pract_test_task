import React from 'react'
import cl from './style.module.scss'

type Props = {
    text:string
}

export default function H2Custom({text}: Props) {
  return (
    <h2 className={cl.h2custom}>{text}</h2>
  )
}
import React from 'react'

import cl from './style.module.scss'
type Props = {
    src:string,
    alt:string,
    description:string
}

export default function PhotoBlock({src, alt, description}: Props) {
  return (
    <div className={cl.wrapper}>
        <img className={cl.image} src={src} alt={alt}/>
        <p>{description}</p>
    </div>
  )
}
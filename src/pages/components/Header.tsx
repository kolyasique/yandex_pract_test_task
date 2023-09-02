import { Link } from "react-router-dom"
import cl from './style.module.scss'
import MenuButton from "../../UI/Buttons/MenuButton/MenuButton"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className={cl.header}>
        <Link to='/aboutme'>
            <MenuButton title='Про меня'/>
        </Link>
        <Link to='/task'>
            <MenuButton title='Задание'/>
        </Link>
    </header>
  )
}
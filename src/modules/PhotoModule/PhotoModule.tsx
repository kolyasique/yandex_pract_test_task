
import PhotoBlock from '../../components/PhotoBlock/PhotoBlock'

import photo from '../../assets/IMG_6364.jpg'
import schoolPhoto from '../../assets/IMG_3450.jpg'
import cl from './style.module.scss'
import H2Custom from '../../UI/H/H2Custom'

type Props = {}

export default function PhotoModule({}: Props) {
  return (
    <div className={cl.wrapper}>
         <H2Custom text='Это я'></H2Custom>
         <div className={cl.photoWrapper}>
        <PhotoBlock src={photo} alt='Я' description='Это мое последнее селфи'/>
        <PhotoBlock src={schoolPhoto} alt='Фото со школы' description='Фото со школы. Я справа'/>
        </div>
    </div>
  )
}

import H2Custom from '../../UI/H/H2Custom'
import StandardParagraph from '../../UI/Paragraphs/StandardParagraph'
import cl from './style.module.scss'
type Props = {}

export default function MyHistoryModule({}: Props) {
  return (
    <div className={cl.wrapper}>
        <H2Custom text='Почему разработка стала моим любимым занятием?'></H2Custom>
        <StandardParagraph text={'Я стараюсь называть мою деятельность не программированием, а разработкой, так как мне нравится не только писать код, но участвовать в процессе проектирования приложения.'}/>
        <StandardParagraph text={'Разработка стала моим любимым занятием, потому что я нашел в нем возможности воплощения идей в готовый продукт. Это хорошая возможность самореализации. '}/>
        <StandardParagraph text={'Больше всего мне нравится Frontend разработка, так как я всегда вижу наглядный результат своих действий, и мне нравится делать красиво и удобно!'}/>
    </div>
  )
}









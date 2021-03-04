import { useTestData } from "../../../context/TestDataContext"
import { FooterLink } from "../FooterLink"

import css from './bottomMenu.module.scss'

const BottomMenu = () => {
  
  const items =  useTestData('bottomMenu')

  if (!items.length) return null
  
  return (
    <ul className={css.list}>
      {items.map(item => {
        return (
          <li key={item.id} className={css.item}>
            <FooterLink url={item.url} text={item.text} classes={css.link} />
          </li>
        )
      })}
    </ul>
  )
}

export { BottomMenu }
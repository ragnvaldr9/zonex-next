import { FooterLink } from "../FooterLink"

import css from './bottomMenu.module.scss'

const BottomMenu = () => {
  
  const items =  [
    {
      id: 1,
      text: 'Returns Policy',
      url: '/'
    },
    {
      id: 2,
      text: 'Privacy Policy',
      url: '/'
    },
  ]

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
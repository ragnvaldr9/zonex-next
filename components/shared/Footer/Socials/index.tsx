import { injectBackgroundImage } from '../../../../utils/injectBackgroundImage'
import css from './socials.module.scss'

const Socials = () => {

  const items = [
    {
      id: '1',
      url: '/',
      icon: 'images/png-icons/tw.png'
    },
    {
      id: '2',
      url: '/',
      icon: 'images/png-icons/fb.png'
    },
    {
      id: '3',
      url: '/',
      icon: 'images/png-icons/in.png'
    },
    {
      id: '4',
      url: '/',
      icon: 'images/png-icons/pin.png'
    },
  ]

  if (!items.length) return null

  return (
    <ul className={css.socials}>
      {items.map(item => {
        return (
          <li key={item.id} className={css.item}>
            <a target='_blank' href={item.url} className={css.link} style={injectBackgroundImage(item.icon)} />
          </li>
        )
      })}
    </ul>
  )
}

export { Socials }
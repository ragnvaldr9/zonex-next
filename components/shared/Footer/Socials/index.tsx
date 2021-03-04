import { injectBackgroundImage } from '../../../../utils/injectBackgroundImage'
import { useTestData } from '../../../context/TestDataContext'
import css from './socials.module.scss'

const Socials = () => {

  const items = useTestData('socials')

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
import { TNavItem } from '../headerTypes'
import css from './headerNavDesktop.module.scss'
import MainLink from '../../../_ui-elements/MainLink/MainLik'

const HeaderNavDesktop: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        {!!navData &&
          navData.map((navLink: TNavItem) => (
            <li key={navLink.id} className={css.navItem}>
              <MainLink to={navLink.url} active={navLink.active}>
                {navLink.name}
              </MainLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default HeaderNavDesktop

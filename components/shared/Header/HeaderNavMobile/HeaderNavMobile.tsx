import clsx from 'clsx'
import { memo, useCallback, useState } from 'react'
import { TNavItem } from '../headerTypes'
import css from './headerNavMobile.module.scss'
import MainLink from '../../../_ui-elements/MainLink/MainLik'

const Burger: React.FC<{ isOpen: boolean, handleClick: () => void }> = memo(({ isOpen, handleClick }) => (
  <div className={clsx(css.burger, isOpen && css._open)} onClick={handleClick}>
    <span className={css.burgerBar}></span>
    <span className={css.burgerBar}></span>
    <span className={css.burgerBar}></span>
    <span className={css.burgerBar}></span>
  </div>
))

const HeaderNavMobile: React.FC<{ navData: Array<TNavItem> }> = ({ navData }) => {

  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <div>
      <Burger isOpen={open} handleClick={toggle} />
      <nav className={clsx(css.nav, open && css._open)}>
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
    </div>
  )
}

export default HeaderNavMobile

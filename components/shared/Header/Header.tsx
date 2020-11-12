import { TNavItem } from './headerTypes'

import css from './header.module.scss'
import HeaderNav from './HeaderNav'
import clsx from 'clsx'


const Header: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerInner, 'container', 'container-narrow ')}>
        <HeaderNav navData={navData} />
      </div>
    </header>
  )
}

export default Header

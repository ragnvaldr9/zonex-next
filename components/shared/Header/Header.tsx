import { TNavItem } from './headerTypes'

import css from './header.module.scss'
import HeaderNav from './HeaderNav'
import clsx from 'clsx'
import useResponsive from '../../../utils/hooks/useResponsive'


const Header: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {

  const { isMobile } = useResponsive()

  return (
    <header className={css.header}>
      <div className={clsx(css.headerInner, 'container', 'container-narrow ')}>
        {!isMobile && <HeaderNav navData={navData} />}
        {isMobile && <div style={{width: '200px', height: '200px', background: '#000'}}></div>}
      </div>
    </header>
  )
}

export default Header

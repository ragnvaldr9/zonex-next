import { TNavItem } from './headerTypes'

import css from './header.module.scss'
import HeaderNav from './HeaderNav'
import clsx from 'clsx'
import useResponsive from '../../_utils/Responsive/useResponsive'
import Responsive from '../../_utils/Responsive/Responsive'


const Header: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {

  // const { isMobile } = useResponsive()

  return (
    <header className={css.header}>
      <div className={clsx(css.headerInner, 'container', 'container-narrow ')}>
        {/* {!isMobile && <HeaderNav navData={navData} />} */}
        <Responsive renderOn={['isMobile', 'isDesktop']}>
          <div style={{width: '200px', height: '200px', background: '#000'}}></div>
        </Responsive>
      </div>
    </header>
  )
}

export default Header

import { TNavItem } from './headerTypes'
import css from './header.module.scss'
import HeaderNav from './HeaderNav'
import clsx from 'clsx'
import Responsive from '../../_utils/Responsive/Responsive'


const Header: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerInner, 'container', 'container-narrow ')}>
        {/* <Responsive renderOn={['isMobile']}>
            <HeaderNav navData={navData} />
        </Responsive> */}
      </div>
    </header>
  )
}

export default Header

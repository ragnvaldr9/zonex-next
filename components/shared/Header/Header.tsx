import { TNavItem } from './headerTypes'
import css from './header.module.scss'
import HeaderNav from './HeaderNav'
import clsx from 'clsx'
import Responsive from '../../_utils/Responsive/Responsive'
import HeaderTools from './HeaderTools'


const Header: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerInner, 'container', 'container-narrow ')}>
        <Responsive renderOn={['isLaptop', 'isDesktop']}>
            <HeaderNav navData={navData} />
        </Responsive>
        <HeaderTools />
      </div>
    </header>
  )
}

export default Header

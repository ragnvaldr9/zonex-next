import { TNavItem } from './headerTypes'
import css from './header.module.scss'
import HeaderNavDesktop from './HeaderNavDesktop/HeaderNavDesktop'
import clsx from 'clsx'
import Responsive from '../../_utils/Responsive/Responsive'
import HeaderTools from './HeaderTools'


const Header: React.FC<{navData: Array<TNavItem>}> = ({ navData }) => {
  return (
    <header className={css.header}>
      <div className={clsx(css.headerInner, 'container', 'container-narrow ')}>
        <Responsive renderOn={['isLaptop', 'isDesktop']}>
            <HeaderNavDesktop navData={navData} />
        </Responsive>
        <HeaderTools />
      </div>
    </header>
  )
}

export default Header

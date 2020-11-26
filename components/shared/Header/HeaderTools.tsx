import Link from 'next/link'
import { memo } from 'react'
import css from './header.module.scss'

const CartLink = memo(() => {
  return (
    <Link href={'/'} passHref>
      <a className={`${css.tool} ${css.cart}`}>
        <span className={css.counter}>0</span>
      </a>
    </Link>
  )
})

const HeaderTools = () => {
  return (
    <ul className={css.tools}>
      <li className={css.toolsItem}>
        {/* Search will be added later */}
        <span className={`${css.tool} ${css.search}`}></span>
      </li>
      <li className={css.toolsItem}>
        <Link href={'/'} passHref>
          <a className={`${css.tool} ${css.profile}`}></a>
        </Link>
      </li>
      <li className={css.toolsItem}>
        <CartLink />
      </li>
    </ul>
  )
}

export default HeaderTools
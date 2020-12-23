import clsx from 'clsx'
import Link from 'next/link'
import { memo } from 'react'
import css from './mainLink.module.scss'

type TMainLink = {
  children: string
  to: string
  active?: boolean
  classes?: string
}

const MainLink: React.FC<TMainLink> = memo(({ children, to = '#', active = false, classes }) => {
  return (
    <Link href={to} passHref>
      <a className={clsx(css.mainLink, classes && classes)}>{children}</a>
    </Link>
  )
})

export default MainLink

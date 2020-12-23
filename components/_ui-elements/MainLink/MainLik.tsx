import clsx from 'clsx'
import Link from 'next/link'
import { memo } from 'react'
import css from './mainLink.module.scss'

type TMainLink = {
  children: string
  to: string
  active?: boolean
  classes?: string
  type?: 'link' | 'span'
}

const MainLink: React.FC<TMainLink> = memo(
  ({ children, to = '#', active = false, classes, type = 'link' }) => {
    return (
      <>
        {type === 'link' && (
          <Link href={to} passHref>
            <a className={clsx(css.mainLink, classes && classes)}>{children}</a>
          </Link>
        )}
        {type === 'span' && (
          <span className={clsx(css.mainLink, classes && classes)}>{children}</span>
        )}
      </>
    )
  }
)

export default MainLink

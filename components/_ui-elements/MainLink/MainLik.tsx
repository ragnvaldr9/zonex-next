import Link from 'next/link'
import css from './mainLink.module.scss'

type TMainLink = {
  children: string
  to: string
  active?: boolean
}

const MainLink: React.FC<TMainLink> = ({ children, to = '#', active = false }) => {
  return (
    <Link href={to} passHref>
      <a className={css.mainLink}>{children}</a>
    </Link>
  )
}

export default MainLink

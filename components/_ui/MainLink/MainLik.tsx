import Link from 'next/link'
import css from './mainLink.module.scss'

type TMainLink = {
  children: string
  to: string
}

const MainLink: React.FC<TMainLink> = ({ children, to = '#' }) => {
  return (
    <Link href={to} passHref>
      <a className={css.mainLink}>{children}</a>
    </Link>
  )
}

export default MainLink

import Link from 'next/link'
import clsx from 'clsx'
import css from './button.module.scss'

type TButton = {
  type?: 'button' | 'link'
  to?: string
  className?: string
  children: string
  theme?: 'light' | 'dark'
}

const Button: React.FC<TButton> = ({
  type = 'button',
  to = '/',
  className,
  theme = 'dark',
  children
}) => {
  
  const classes = clsx(
    css.button,
    theme === 'dark' && '_dark',
    theme === 'light' && '_light',
    !!className && className
  )

  switch (type) {
    case 'button':
      return <button className={classes}>{children}</button>
    case 'link':
      return (
        <Link href={to} passHref>
          <a className={classes}>{children}</a>
        </Link>
      )
  }
}

export default Button

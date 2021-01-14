import clsx from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'
import css from './footer.module.scss'

type TFooterLink = {
  url: string
  text: string
  classes?: string
}

const FooterLink: FC<TFooterLink> = ({url, text, classes}) => (
  <Link href={url} passHref>
    <a className={clsx(css.footerLink, classes && classes)}>{text}</a>
  </Link>
)

export { FooterLink }

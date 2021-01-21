import clsx from 'clsx'
import React, { FC } from 'react'
import About from './About'

import css from './footer.module.scss'
import { FooterMain } from './FooterMain'

export enum FooterView {
  SMALL = 'footer-small',
  DETAIL = 'footer-detail',
}

export type FooterProps = {
  showAboutSection?: boolean,
  view: FooterView,
}

const Footer: FC<FooterProps> = ({ showAboutSection, view }) => {
  return (
    <footer>
      <div className={clsx('container', css.container)}>
        <div className={css.content}>
          {showAboutSection && <About />}
          <FooterMain view={view} />
        </div>
      </div>
    </footer>
  )
}

export default Footer

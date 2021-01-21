import React, { FC } from 'react'
import { FooterProps, FooterView } from '.'
import { BottomMenu } from './BottomMenu/Index'
import css from './footer.module.scss'
import { Socials } from './Socials'

type FooterMainProps = Pick<FooterProps, 'view'>

const FooterMain: FC<FooterMainProps> = ({ view }) => {
  return (
    <div className={css.footerMain}>
      {view === FooterView.DETAIL && <div className={css.footerTools}>
        {/* Will be added later, during development of other pages */}
      </div>}
      <div className={css.footerMenu}>
          <BottomMenu />
      </div>
      <div className={css.footerSocials}>
        <Socials />
      </div>
    </div>
  )
}

export { FooterMain }
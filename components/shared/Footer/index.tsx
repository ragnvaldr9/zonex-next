import clsx from 'clsx'
import { url } from 'inspector'
import { FC } from 'react'
import About from './About'

import css from './footer.module.scss'

const Footer: FC = () => {
  return (
    <footer>
      <div className={clsx('container', css.container)}>
        <div className={css.content}>
          <About />
        </div>
      </div>
    </footer>
  )
}

export default Footer

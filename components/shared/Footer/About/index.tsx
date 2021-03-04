import { FC } from 'react'
import { useTestData } from '../../../context/TestDataContext'
import { FooterLink } from '../FooterLink'
import css from './about.module.scss'
import { Subscribe } from './Subscribe'

const About: FC = () => {
  const { service, company, subscribe } = useTestData('aboutData')

  const renderMenu = (links) => (
    <ul>
      {links.map((link) => {
        return (
          <li className={css.menuItem} key={link.text}>
            <FooterLink url={link.url} text={link.text} />
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className={css.about}>
      <div className={css.column}>
        <h3 className={css.title}>{service.title}</h3>
        {renderMenu(service.links)}
      </div>
      <div className={css.column}>
        <h3 className={css.title}>{company.title}</h3>
        {renderMenu(company.links)}
      </div>
      <div className={css.column}>
        <h3 className={css.title}>{subscribe.title}</h3>
        <Subscribe {...subscribe.form} />
      </div>
    </div>
  )
}

export default About

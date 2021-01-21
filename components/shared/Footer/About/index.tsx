import { FC } from 'react'
import { FooterLink } from '../FooterLink'
import css from './about.module.scss'
import { Subscribe } from './Subscribe'

const aboutData = {
  service: {
    title: 'Customer service',
    links: [
      {
        text: 'Phone: +866.597.2742',
        url: 'tel:+8665972742'
      },
      {
        text: 'Live chat',
        url: '/'
      },
      {
        text: 'About Us',
        url: '/'
      },
      {
        text: 'Terms & Conditions',
        url: '/'
      }
    ]
  },
  company: {
    title: 'Company',
    links: [
      {
        text: 'What We Do',
        url: '/'
      },
      {
        text: 'Available Services',
        url: '/'
      },
      {
        text: 'Latest Posts',
        url: '/'
      },
      {
        text: 'FAQs',
        url: '/'
      }
    ]
  },
  subscribe: {
    title: 'Subscribe',
    form: {
      formTitle: 'Join our list and get 15% off your first purchase!',
      note: '*Don’t worry we don’t spam',
      placeholder: 'Email Adress',
      buttonText: 'Subscribe'
    }
  }
}

const About: FC = () => {
  const { service, company, subscribe } = aboutData

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

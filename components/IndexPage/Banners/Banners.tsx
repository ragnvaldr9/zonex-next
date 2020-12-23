import clsx from "clsx"
import { FC } from "react"
import MainLink from "../../_ui-elements/MainLink/MainLik"
import css from './banners.module.scss'

type TBannerCard = {
  img?: string
  title: string
  url: string
} 

const items = [
  {id: 1, title: `Women's Mid-Season`, url: '/', img: 'images/main/banners/midseason.jpg'},
  {id: 2, title: 'Summer Romance', url: '/', img: 'images/main/banners/summer.jpg'},
  {id: 3, title: '20% Off All Accessories', url: '/', img: 'images/main/banners/accs.jpg'},
]

const BannersCard: FC<TBannerCard> = ({ img, title, url }) => (
  <article className={css.card} style={{backgroundImage: `url(${img})`}}> 
    <h3 className={css.cardTitle}>{title}</h3>
    <MainLink to={url}>Shop Now</MainLink>
  </article>
)

const Banners: FC = () => {

  if (items.length === 0) return null

  return (
    <section>
      <div className={clsx('container', css.container)} >
        <ul className={css.list}>
          {items.map(item => (
            <div className={css.item} key={item.id}> 
              <BannersCard title={item.title} url={item.url} img={item.img} />
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Banners
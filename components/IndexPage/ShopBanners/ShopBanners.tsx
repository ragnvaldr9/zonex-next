import clsx from "clsx"
import Link from "next/link"
import { type } from "os"
import { FC } from "react"
import { useTestData } from "../../context/TestDataContext"
import MainLink from "../../_ui-elements/MainLink/MainLik"
import css from './shopBanners.module.scss'

type TShopBanner = {
  title: string,
  url: string,
  img: string
}

const ShopBanner: FC<TShopBanner> = ({ title, url, img }) => (
  <Link href={url} passHref>
    <a className={css.banner} style={{backgroundImage: `url(${img})`}}>
      <h3 className={css.title}>{title}</h3>
      <MainLink to={url} type='span'>Read more</MainLink>
    </a>
  </Link>
) 

const ShopBanners: FC = () => {

  const banners = useTestData('shopBanners')

  return (
    <section className={css.section}>
      <div className={clsx('container', css.container)}>
        {banners.map(banner => (<ShopBanner key={banner.id} {...banner} />))}
      </div>
    </section>
  )
}

export default ShopBanners
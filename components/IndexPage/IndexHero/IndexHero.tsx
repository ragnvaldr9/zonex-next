import clsx from 'clsx'
import { FC } from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import css from './indexHero.module.scss'

const items = [
  {
    id: 1,
    title: 'Fall-Winter Clearance Sales',
    description: 'All Sale Items are Final Sale / Free Shipping on All Orders',
    image: 'images/main/hero/girl.png'
  },
  {
    id: 2,
    title: 'Fall-Winter Clearance Sales',
    description: 'All Sale Items are Final Sale / Free Shipping on All Orders',
    image: 'images/main/hero/girl.png'
  },
  {
    id: 3,
    title: 'Fall-Winter Clearance Sales',
    description: 'All Sale Items are Final Sale / Free Shipping on All Orders',
    image: 'images/main/hero/girl.png'
  }
]

type THeroItem = {
  title: string
  description: string
  image: string
  imageDescription?: string
}

const IndexHero: FC = () => {

  SwiperCore.use([Pagination])

  return (
    <section className={css.hero}>
      <div className={clsx('container', css.container)}>
        <div className={css.carouselWrap}>
          {items.length > 1 && (
            <Swiper
              className={css.carousel}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{ clickable: true, modifierClass: 'heroPagination-' }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id} className={css.swiperSlide}>
                  <HeroItem {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  )
}

const HeroItem: FC<THeroItem> = ({ title, description, image, imageDescription }) => (
  <div className={css.content}>
    <h2 className={css.title}>{title}</h2>
    <p className={css.description}>{description}</p>
    <img src={image} className={css.image} alt={imageDescription || ''} aria-hidden='true' />
  </div>
)

export default IndexHero

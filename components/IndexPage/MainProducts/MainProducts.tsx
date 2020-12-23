import clsx from 'clsx'
import { FC, useState } from 'react'
import Product from '../../shared/Product/Product'
import LoadMore from '../../_ui-elements/LoadMore/LoadMore'
import MainLink from '../../_ui-elements/MainLink/MainLik'
import css from './mainProducts.module.scss'

const nav = [
  { idx: 0, name: 'Best Sellers', to: '/?q=best' },
  { idx: 1, name: 'New Products', to: '/?q=new' },
  { idx: 2, name: 'Sale Products', to: '/?=sale' }
]

const products = [
  {id: 1, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-1.jpg', price: 100, currency: '$', link: '/'},
  {id: 2, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-2.jpg', price: 100, currency: '$', link: '/'},
  {id: 3, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-3.jpg', price: 100, currency: '$', link: '/'},
  {id: 4, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-4.jpg', price: 100, currency: '$', link: '/'},
  {id: 5, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-5.jpg', price: 100, currency: '$', link: '/'},
]

const MainProductsNav: FC = () => {
  const [current, setCurrent] = useState(0)

  return (
    <ul className={css.nav}>
      {nav.map((item, i) => (
        <li key={item.idx} className={css.navItem}>
          <MainLink to={item.to} classes={clsx(css.navButton, i === current && css._current)}>
            {item.name}
          </MainLink>
        </li>
      ))}
    </ul>
  )
}

const MainProductsList: FC = () => (<ul className={css.grid}>
  {products.map(product => (
    <li key={product.id} className={css.item}>
      <Product {...product} />
    </li>
  ))}
</ul>)

const MainProducts: FC = () => {
  return (
    <section>
      <div className={clsx('container', css.container)}>
        <MainProductsNav />
        <MainProductsList />
        <div className={css.btnCenter}>
          <LoadMore />
        </div>
      </div>
    </section>
  )
}

export default MainProducts

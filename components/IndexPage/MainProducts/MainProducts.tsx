import clsx from 'clsx'
import { FC, useState } from 'react'
import { useTestData } from '../../context/TestDataContext'
import Product from '../../shared/Product/Product'
import LoadMore from '../../_ui-elements/LoadMore/LoadMore'
import MainLink from '../../_ui-elements/MainLink/MainLik'
import css from './mainProducts.module.scss'

type NavItemType = {
  idx: number
  name: string
  to: string
}

type ProductType = {
  id: number
  title: string
  image: string
  price: number
  currency: string
  link: string
}

const MainProductsNav: FC<{ nav: NavItemType[] }> = ({ nav }) => {
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

const MainProductsList: FC<{ products: ProductType[] }> = ({ products }) => (<ul className={css.grid}>
  {products.map(product => (
    <li key={product.id} className={css.item}>
      <Product {...product} />
    </li>
  ))}
</ul>)

const MainProducts: FC = () => {
  const { nav, products } = useTestData('mainProducts')
  
  return (
    <section>
      <div className={clsx('container', css.container)}>
        <MainProductsNav nav={nav} />
        <MainProductsList products={products} />
        <div className={css.btnCenter}>
          <LoadMore />
        </div>
      </div>
    </section>
  )
}

export default MainProducts

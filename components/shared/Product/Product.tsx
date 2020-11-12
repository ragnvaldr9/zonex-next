import css from './product.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

type TProduct = {
  title: string
  image: string
  price: number
  currency: string
  link: string
  oldPrice?: number
  isNew?: boolean
  isBest?: boolean
  isSale?: boolean
}

const Product: React.FC<TProduct> = ({
  image,
  title,
  isNew = false,
  isBest = true,
  isSale = false,
  currency,
  price,
  oldPrice,
  link
}) => {
  return (
    <article className={css.product}>
      <div className={css.productImage}>
        {isSale && <span className={css.productSale}>Sale</span>}
        <img src={image} alt={title} />
      </div>
      {isNew && <span className={clsx(css.prop, css.productProp, isNew && css.new)}>New</span>}
      {isBest && (
        <span className={clsx(css.prop, css.productProp, isBest && css.best)}>Best seller</span>
      )}
      <h3 className={css.productTitle}>
        <Link href={link} passHref>
          <a>{title}</a>
        </Link>
      </h3>
      <span className={css.productPrice}>{`${currency}${price}`}</span>
      {isSale && <span className={css.productOldprice}>{`${currency}${oldPrice}`}</span>}
    </article>
  )
}

export default Product

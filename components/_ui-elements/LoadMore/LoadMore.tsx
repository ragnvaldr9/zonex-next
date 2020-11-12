import clsx from 'clsx'
import SVGSprite from "../SVGSprite/SVGSprite"
import css from './loadMore.module.scss'

type TLoadMore = {
  className?: string
}

const LoadMore: React.FC<TLoadMore> = ({ className }) => {

  const classes = clsx(css.loadMore, !!className && className)

  return (
    <button className={classes}>
      <span>Load More</span>
      <SVGSprite name='down-arrow' />
    </button>
  )
}

export default LoadMore
import sprite from '../../../public/images/sprite.svg'

type TSVGsprite = {
  name: string
  color?: string
  size?: string
  className?: string
}

const SVGSprite: React.FC<TSVGsprite> = ({ name, color, size, className }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  )
}

export default SVGSprite

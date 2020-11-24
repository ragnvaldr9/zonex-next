export type TScreenValue = 'isMobile' | 'isTablet' | 'isLaptop' | 'isDesktop' | 'isBigScreen'

export type TScreenParams<T> = {
  [T in TScreenValue]: boolean
}

export type TNavItem = {
  id: number
  name: string
  url: string
  active: boolean
}

export type THeader = {
  navData: Array<TNavItem>
}
import { FC } from "react"
import Banners from "./Banners/Banners"
import IndexHero from "./IndexHero/IndexHero"
import MainProducts from "./MainProducts/MainProducts"
import ShopBanners from "./ShopBanners/ShopBanners"

const IndexPageContent: FC = () => {
  return ( 
    <main>
      <IndexHero />
      <Banners />
      <MainProducts />
      <ShopBanners />
    </main> 
  )
}

export default IndexPageContent
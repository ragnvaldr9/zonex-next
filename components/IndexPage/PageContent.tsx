import { FC } from "react"
import Banners from "./Banners/Banners"
import IndexHero from "./IndexHero/IndexHero"
import MainProducts from "./MainProducts/MainProducts"

const IndexPageContent: FC = () => {
  return ( 
    <main>
      <IndexHero />
      <Banners />
      <MainProducts />
    </main> 
  )
}

export default IndexPageContent
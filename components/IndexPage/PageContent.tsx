import { FC } from "react"
import Banners from "./Banners/Banners"
import IndexHero from "./IndexHero/IndexHero"

const IndexPageContent: FC = () => {
  return ( 
    <main>
      <IndexHero />
      <Banners />
    </main> 
  )
}

export default IndexPageContent
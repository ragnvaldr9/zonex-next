import Product from "../components/shared/Product/Product"
import Button from "../components/_ui-elements/Button/Button"
import MainLink from "../components/_ui-elements/MainLink/MainLik"
import { testProduct } from "../utils/testData"



const Index = () => {

  return (
    <>
      <div style={{width: '260px'}}><Product {...testProduct} /></div>
    </>
  )
}

export default Index

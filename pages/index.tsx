import { GetServerSideProps } from 'next'
import Header from '../components/shared/Header/Header'
import Product from '../components/shared/Product/Product'
import Button from '../components/_ui-elements/Button/Button'
import LoadMore from '../components/_ui-elements/LoadMore/LoadMore'
import MainLink from '../components/_ui-elements/MainLink/MainLik'
import SVGSprite from '../components/_ui-elements/SVGSprite/SVGSprite'
import { detectInitialDeviceType } from '../utils/detectInitialDeviceType'
import { mainNav, testProduct } from '../utils/testData'

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const {initialDeviceType, screenOptions} = detectInitialDeviceType(context.req.headers['user-agent'])

  return {
    props: {
      initialReduxState: {
        device: {
          initialDeviceType,
          screenOptions
        }
      }
    }
  }
}

const Index = () => {
  return (
    <>
      <Header navData={mainNav} />
      <div style={{ width: '260px' }}>
        <LoadMore />
      </div>
    </>
  )
}

export default Index

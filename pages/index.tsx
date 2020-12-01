import { GetServerSideProps } from 'next'
import IndexPageContent from '../components/IndexPage/PageContent'
import Header from '../components/shared/Header/Header'
import { detectInitialDeviceType } from '../utils/detectInitialDeviceType'
import { mainNav } from '../utils/testData'

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
    <div className='site-wrapper'>
      <Header navData={mainNav} />
      <IndexPageContent />
    </div>
  )
}

export default Index

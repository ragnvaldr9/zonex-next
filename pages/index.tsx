import { GetServerSideProps } from 'next'
import IndexPageContent from '../components/IndexPage/PageContent'
import Footer, { FooterView } from '../components/shared/Footer'
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

  const footerView = FooterView.SMALL

  return (
    <div className='site-wrapper'>
      <Header navData={mainNav} />
      <IndexPageContent />
      <Footer view={footerView} showAboutSection />
    </div>
  )
}

export default Index

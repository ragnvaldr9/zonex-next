import { Provider } from 'react-redux'
import { useReduxStore } from '../redux/store'
import type { AppProps } from 'next/app'
import '../scss/index.scss'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import DeviceChecker from '../components/_utils/DeviceChecker/DeviceChecker'

export default function App({ Component, pageProps }: AppProps) {
  const store = useReduxStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <DeviceChecker />
      <Component {...pageProps} />
    </Provider>
  )
}

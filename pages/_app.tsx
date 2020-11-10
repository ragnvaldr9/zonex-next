import { Provider } from 'react-redux'
import { useReduxStore } from '../redux/store'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const store = useReduxStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

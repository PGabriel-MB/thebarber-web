import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SplashLoading } from '../components/splash'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SplashLoading />
      <Component {...pageProps} />
    </>
  )
}

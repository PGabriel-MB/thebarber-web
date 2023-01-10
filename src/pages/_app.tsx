import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { SplashLoading } from '../components/splashLoading'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SplashLoading />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

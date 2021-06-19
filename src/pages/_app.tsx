import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import '../styles/swiper.css'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

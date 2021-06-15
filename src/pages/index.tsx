import { Divider, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { Banner } from '../Components/Banner'
import { Header } from '../Components/Header'
import { Swiper } from '../Components/Swiper'
import { TravelTypes } from '../Components/TravelTypes'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Flex w="100%" direction="column" align="center">
        <Header />
        <Banner />
        <TravelTypes />

        <Divider w="100px" borderBottomWidth="2px" borderColor="dark.700" />

        <Text fontWeight="500" fontSize={['lg', '2xl', '4xl']} align="center" px="5" my="52px">
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Swiper px={['2', '4', '7', '24']} pb="10" />
      </Flex>
    </>
  )
}

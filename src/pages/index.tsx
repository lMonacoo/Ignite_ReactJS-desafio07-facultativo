import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../Components/Banner'
import { Header } from '../Components/Header'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Flex h="100vh" direction="column">
        <Header />
        <Banner />
      </Flex>
    </>
  )
}

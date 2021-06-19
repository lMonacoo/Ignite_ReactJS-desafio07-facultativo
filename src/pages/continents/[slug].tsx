import { Flex } from '@chakra-ui/react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { ContinentBanner } from '../../Components/ContinentBanner'
import { ContinentInfos } from '../../Components/ContinentInfos'
import { ContinentTopCountries } from '../../Components/ContinentTopCountries'
import { Header } from '../../Components/Header'
import { api } from '../../services/api'

type LocalesProps = {
  country: string
  continent: string
}

interface CountriesProps {
  name: string
  totalCountries: number
  languages: number
  totalCities: number
  locales: LocalesProps[]
  text: string
}

interface ContinentProps extends CountriesProps {
  slug: string
}

export default function Continents(props: ContinentProps): JSX.Element {
  const { slug, name, totalCountries, languages, totalCities, text, locales } = props

  return (
    <>
      <Head>
        <title>WorldTrip | {slug}</title>
      </Head>
      <Header />

      <Flex direction="column" align="center">
        <ContinentBanner continentName={name} />
        <ContinentInfos countries={totalCountries} languages={languages} cities={totalCities} text={text} />
        <ContinentTopCountries countries={locales} />
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id

  const paths = [
    { params: { slug: 'SouthAmerica' } },
    { params: { slug: 'Europe' } },
    { params: { slug: 'NorthAmerica' } },
  ]

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${slug}`,
  }

  const resCountries = await api(options)
    .then(({ data }): AxiosResponse<CountriesProps> => {
      return data
    })
    .catch(() => {
      console.log('erro')
    })

  return {
    props: { ...resCountries, slug },
    revalidate: 60 * 60 * 24 * 20, // 20 dias
  }
}

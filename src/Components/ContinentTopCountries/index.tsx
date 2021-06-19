import { Grid, Heading, VStack } from '@chakra-ui/react'

import { ContinentCountryBox } from '../ContinentCountryBox'

interface ContinentTopCountries {
  countries: {
    country: string
    continent: string
  }[]
}

export function ContinentTopCountries({ countries }: ContinentTopCountries): JSX.Element {
  return (
    <VStack maxW="container.xxl" align="start" mb="28" w="100%" spacing="10" px={['4', '4', '20']}>
      <Heading fontSize="4xl" fontWeight="500" lineHeight="10" mb={['0', '0', '10']}>
        Países +{countries.length}
      </Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(0px, 256px))" gap="10" w="100%" justifyContent="center">
        {countries.map((country) => (
          <ContinentCountryBox country={country} key={country.country} />
        ))}
      </Grid>
    </VStack>
  )
}

// https://flagpedia.net/download/api

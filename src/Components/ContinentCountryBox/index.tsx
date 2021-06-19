import { Avatar, Flex, Image, Text, VStack } from '@chakra-ui/react'

interface country {
  country: {
    country: string
    continent: string
  }
}

export function ContinentCountryBox({ country }: country): JSX.Element {
  return (
    <VStack overflow="hidden" mt="0 !important">
      <Image
        src={`https://source.unsplash.com/random/256x173/?${country.country},country`}
        alt="País"
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
      />

      <Flex
        bg="white"
        border="1px solid"
        borderRadius="1px solid"
        borderColor="yellow.500"
        borderTopWidth="0"
        m="0 !important"
        w="100%"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        h="28"
        align="center"
        px="6"
        justify="space-between"
      >
        <VStack align="start">
          <Text lineHeight="6" fontWeight="600" fontSize="xl">
            {country.country}
          </Text>
          <Text color="dark.350" size="md" fontWeight="500" lineHeight="tall">
            {country.continent}
          </Text>
        </VStack>
        <Avatar name="BASE Country" size="sm" bg="teal.500" src="https://source.unsplash.com/-RO2DFPl7wE" />
      </Flex>
    </VStack>
  )
}

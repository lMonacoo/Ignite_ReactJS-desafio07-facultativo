import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react'

import { TravelIcons } from '../TravelIcons'

export function TravelTypes(): JSX.Element {
  const iconsVisible = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <SimpleGrid
      spacingX={['0', '0', '0', '5', '35']}
      spacingY={['3', '7']}
      minChildWidth={['0', '0', '70px', '70px', '80px']}
      maxW="container.xxl"
      w="100%"
      px={['1rem', '1rem', '2rem', '4rem', '7rem']}
      align="center"
      mt={['40px', '80px', '114px']}
      mb={['50px', '80px']}
      gridTemplateAreas={
        !iconsVisible ? '"cocktail surf" "building museum" "earth earth"' : '"cocktail surf building museum earth"'
      }
    >
      <TravelIcons image="cocktail" text="vida noturna" />
      <TravelIcons image="surf" text="praia" />
      <TravelIcons image="building" text="moderno" />
      <TravelIcons image="museum" text="clássico" />
      <TravelIcons image="earth" text="e mais..." />
    </SimpleGrid>
  )
}

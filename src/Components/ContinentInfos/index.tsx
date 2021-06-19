import { HStack, Text, useBreakpointValue } from '@chakra-ui/react'

import { StatsInfos } from '../StatsInfos'

interface ContinentInfoProps {
  countries: number
  languages: number
  cities: number
  text: string
}

export function ContinentInfos({ countries, languages, cities, text }: ContinentInfoProps): JSX.Element {
  const isMobileTransitions = useBreakpointValue({ base: true, lg: false })

  return (
    <HStack
      maxW="container.xxl"
      w="100%"
      align="center"
      my={['6', '6', '20']}
      spacing={['0', '0', '28']}
      px={['4', '4', '20']}
      style={isMobileTransitions ? { flexDirection: 'column' } : {}}
    >
      <Text fontSize={['md', 'xl', '2xl']} fontWeight="9" align="justify" mb={['4', '4', '0']}>
        {text}
      </Text>

      <HStack spacing={['3', '3', '10']}>
        <StatsInfos number={countries} legend="países" />
        <StatsInfos number={languages} legend="línguas" />
        <StatsInfos number={cities} legend="cidades +100" isPopover />
      </HStack>
    </HStack>
  )
}

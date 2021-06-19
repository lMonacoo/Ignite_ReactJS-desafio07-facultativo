import { Box, Heading, useBreakpointValue } from '@chakra-ui/react'

interface ContinentBannerProps {
  continentName: string
}

export function ContinentBanner({ continentName }: ContinentBannerProps): JSX.Element {
  const isMobileTransitions = useBreakpointValue({ base: true, lg: false })

  return (
    <Box
      pos="relative"
      w="100%"
      h={['36', '52', 'lg']}
      bgImage="url(https://source.unsplash.com/random/?America,city)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      style={isMobileTransitions ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}
    >
      <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity="0.3" />

      <Heading
        fontWeight="600"
        fontSize={isMobileTransitions ? '4xl' : '5xl'}
        lineHeight="4.5rem"
        color="light.50"
        pos="absolute"
        style={isMobileTransitions ? { position: 'relative' } : { position: 'absolute', bottom: 14, left: '8.75rem' }}
      >
        {continentName}
      </Heading>
    </Box>
  )
}

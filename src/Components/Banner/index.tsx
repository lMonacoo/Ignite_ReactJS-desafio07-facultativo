import { Box, Container, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'

export const Banner: React.FC = () => {
  const isPlaneVisible = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Container
      centerContent
      h={['163px', '250px', '340px']}
      maxW="100%"
      bgImage="url(https://source.unsplash.com/fNUNt9w3m-Q)"
      bgSize="cover"
      bgPosition="center top"
      bgRepeat="no-repeat"
    >
      <Flex
        align="center"
        justify="space-between"
        px={{ md: '1rem', lg: '2rem', xl: '4rem', '2xl': '8.75rem' }}
        h="100%"
        w="100%"
        maxW="container.xxl"
      >
        <Box maxW={['sm', 'md', 'lg', 'xl']}>
          <Heading
            fontSize={['lg', '2xl', '4xl']}
            color="light.50"
            fontWeight="medium"
            lineHeight={['7', '9', '10', '54px']}
            mb={['3', '5']}
          >
            5 Continentes, infinitas&nbsp;possibilidades.
          </Heading>
          <Text
            fontSize={['xs', 'sm', 'xl']}
            color="light.200"
            fontWeight="normal"
            lineHeight={['21px', '30px']}
            pr="2"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isPlaneVisible && (
          <Image src="/images/Airplane.svg" alignSelf="flex-end" mb="-9" w={{ md: '350px', lg: 'auto', xl: 'auto' }} />
        )}
      </Flex>
    </Container>
  )
}

// '0', sm'320px', md'768px', lg'960px', xl'1200px', 2xl'1400px'

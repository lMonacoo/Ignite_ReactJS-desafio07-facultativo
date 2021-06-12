import { Flex, Image, Box, Container, Heading } from '@chakra-ui/react'

export function Banner(): JSX.Element {
  return (
    <Flex
      h="340px"
      w="100%"
      align="center"
      justify="space-between"
      bgImage="url(https://source.unsplash.com/fNUNt9w3m-Q)"
      bgSize="cover"
      bgPosition="center 20%"
      bgRepeat="no-repeat"
    >
      <Container w="min-content">
        <Heading fontSize="4xl" color="light.50">
          5 Continentes, infinitas&nbsp;possibilidades.
        </Heading>
      </Container>
      <Image src="/images/Airplane.svg" alignSelf="flex-end" mb="-9" />
    </Flex>
  )
}

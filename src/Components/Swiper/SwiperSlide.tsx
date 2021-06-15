import { Box, Flex, Heading, Text } from '@chakra-ui/react'

interface SwiperSlideProps {
  heading: string
  text: string
  imageTerm: string
}

export function SwiperSlide({ heading, text, imageTerm }: SwiperSlideProps): JSX.Element {
  return (
    <>
      <Flex
        bgImage={`url(https://source.unsplash.com/random/?${imageTerm},city)`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h={['250px', '300px', '450px']}
        align="center"
        justify="center"
        direction="column"
      >
        <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity="0.4" />
        <Heading fontSize={['2xl', '1.563rem', '5xl']} lineHeight={['5', '10', '4rem']} color="light.50" pos="relative">
          {heading}
        </Heading>
        <Text fontWeight="700" lineHeight="9" fontSize={['0.7rem', 'xs', 'sm']} color="light.200" pos="relative">
          {text}
        </Text>
      </Flex>
    </>
  )
}

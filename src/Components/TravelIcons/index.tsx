import { Box, Flex, Image, ListItem, UnorderedList, useBreakpointValue } from '@chakra-ui/react'

interface TravelIconsProps {
  text: string
  image: string
}

export function TravelIcons({ image, text }: TravelIconsProps): JSX.Element {
  const iconsVisible = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex align="center" direction="column" justifySelf="center" gridArea={image}>
      {iconsVisible && <Image src={`/images/${image}.svg`} alt={text} />}

      <UnorderedList ms="0" whiteSpace="nowrap">
        {!iconsVisible && <Box mr="2" display="inline-block" w="8px" h="8px" bg="yellow.500" borderRadius="full" />}
        <ListItem
          listStyleType="none"
          ms="0"
          mt={iconsVisible ? '5' : '0'}
          fontSize={['lg', 'lg', 'xl', '2xl', '2xl']}
          fontWeight="600"
          display="inline-block"
        >
          {text}
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}

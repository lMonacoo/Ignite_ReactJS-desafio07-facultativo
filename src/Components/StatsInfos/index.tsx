import {
  Box,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

interface StatsInfosProps {
  number: number
  legend: string
  isPopover?: boolean
}

export function StatsInfos({ number, legend, isPopover }: StatsInfosProps): JSX.Element {
  return (
    <Flex align="center" justify="center" direction="column">
      <Heading color="yellow.500" fontSize={['lg', '4xl', '5xl']} fontWeight="600" lineHeight="1.2">
        {number}
      </Heading>
      <Flex align="center">
        <Text fontSize={['md', 'lg', '2xl']} fontWeight="600" lineHeight="9" whiteSpace="nowrap">
          {legend}
        </Text>
        {isPopover && (
          <Popover placement="top-end" isLazy variant="responsive">
            <PopoverTrigger>
              <Box>
                <Icon ml="2" as={FiInfo} fontSize="xl" cursor="pointer" />
              </Box>
            </PopoverTrigger>
            <PopoverContent pt="3">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="700" color="yellow.500">
                Conheça as cidades mais famosas
              </PopoverHeader>
              <PopoverBody>Abaixo você encontra diversas outras opções de cidades!</PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Flex>
  )
}

import { CloseButton, Flex, Icon, Image } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

export function Header(): JSX.Element {
  const { asPath } = useRouter()

  return (
    <Flex w="100%" py={['3', '4', '6']} px={['5', '5', '8.75rem']} align="center">
      {asPath !== '/' && (
        <Link href="/" passHref>
          <CloseButton size="sm">
            <Icon as={FiChevronLeft} fontSize="20" />
          </CloseButton>
        </Link>
      )}
      <Image m="0 auto" w={['150px', '150px', 'auto']} src="/images/Logo.svg" />
    </Flex>
  )
}

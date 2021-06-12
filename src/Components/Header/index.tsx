import Link from 'next/link'
import { Flex, Image, Icon, CloseButton } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { FiChevronLeft } from 'react-icons/fi'

export function Header(): JSX.Element {
  const { asPath } = useRouter()

  return (
    <Flex w="100%" py="6" px="8.75rem" align="center">
      {asPath !== '/' && (
        <Link href="/" passHref>
          <CloseButton size="sm">
            <Icon as={FiChevronLeft} fontSize="20" />
          </CloseButton>
        </Link>
      )}
      <Image m="0 auto" src="/images/Logo.svg" />
    </Flex>
  )
}

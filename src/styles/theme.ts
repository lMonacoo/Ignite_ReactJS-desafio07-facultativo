import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    light: {
      '50': '#F5F8FA', // Headings and Text
      '200': '#DADADA', // Info
    },
    dark: {
      '350': '#999999', // Info
      '700': '#47585B', // Headings and Text
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        color: 'dark.700',
        bg: 'light.50',
      },
    },
  },
})

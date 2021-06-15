import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1400px',
})

const colors = {
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
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
}

const sizes = {
  container: {
    xxl: '1440px',
  },
}

export const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  sizes,
  styles: {
    global: {
      body: {
        color: 'dark.700',
        bg: 'light.50',
      },
    },
  },
})

import { Box, ChakraProps } from '@chakra-ui/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import { Swiper as SwiperContainer, SwiperSlide as SwiperSlideContainer } from 'swiper/react'

import { SwiperSlide } from './SwiperSlide'

SwiperCore.use([Autoplay, Pagination, Navigation])

export function Swiper({ ...rest }: ChakraProps): JSX.Element {
  return (
    <Box {...rest} maxW="container.xxl" w="100%">
      <SwiperContainer
        id="swiperContainer"
        navigation
        slidesPerView={1}
        loop
        pagination={{
          dynamicBullets: true,
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className}">${index + 1}</span>`
          },
        }}
        centeredSlides
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        autoHeight
      >
        <SwiperSlideContainer>
          <SwiperSlide heading="Europa" text="O continente mais antigo." imageTerm="Europe" />
        </SwiperSlideContainer>

        <SwiperSlideContainer>
          <SwiperSlide heading="América do Norte" text="O continente da cultura." imageTerm="NorthAmerica" />
        </SwiperSlideContainer>

        <SwiperSlideContainer>
          <SwiperSlide heading="América do Sul" text="O continente da riqueza." imageTerm="SouthAmerica" />
        </SwiperSlideContainer>

        <SwiperSlideContainer>
          <SwiperSlide heading="Ásia" text="O continente da tecnologia." imageTerm="Asia" />
        </SwiperSlideContainer>

        <SwiperSlideContainer>
          <SwiperSlide heading="África" text="O continente da felicidade." imageTerm="Africa" />
        </SwiperSlideContainer>

        <SwiperSlideContainer>
          <SwiperSlide heading="Oceania" text="O continente da igualdade." imageTerm="Oceania" />
        </SwiperSlideContainer>
      </SwiperContainer>
    </Box>
  )
}

/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper/core"
import Img from "gatsby-image"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"

// install Swiper modules
SwiperCore.use([Pagination])

const Gallery = ({ images }) => {
  const { theme } = useThemeUI()
  const { radii, space } = theme
  return (
    <div>
      <Swiper slidesPerView="auto" spaceBetween={space[3]}>
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ width: image.childImageSharp.fixed.width }}
          >
            <Img
              fixed={image.childImageSharp.fixed}
              style={{ borderRadius: radii[4] }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery

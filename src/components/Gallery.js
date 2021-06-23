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
  const imageWidth = images.find(image => image.childImageSharp !== null)
    .childImageSharp.fixed.width
  return (
    <div
      sx={{
        my: 4,
        borderRadius: 3,
        overflow: "hidden",
        transform: "translateZ(0)", // Fixes borderRadius for iOS Safari
      }}
    >
      <Swiper slidesPerView="auto" spaceBetween={space[3]}>
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              width:
                (image.childImageSharp && image.childImageSharp.fixed.width) ||
                imageWidth,
            }}
          >
            {image.childImageSharp ? (
              <Img
                fixed={image.childImageSharp.fixed}
                style={{ borderRadius: radii[3], display: "block" }}
              />
            ) : (
              <img
                src={image.publicURL}
                alt=""
                sx={{ display: "block", width: imageWidth, borderRadius: 3 }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery

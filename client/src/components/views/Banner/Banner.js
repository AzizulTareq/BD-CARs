import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../../Images/banner1.jpg'
import banner2 from '../../../Images/banner2.jpg'
import banner3 from '../../../Images/banner3.jpg'


const Banner = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img style={{ width: '100%', height: '400px'}}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width: '100%', height: '400px'}}
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width: '100%', height: '400px'}}
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )
}

export default Banner

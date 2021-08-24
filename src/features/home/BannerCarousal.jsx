import React, { Component } from 'react'
import Slider from 'react-slick'

export default class BannerCarousal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    }
    return (
      <div className="banner-carousal-wrapper">
        <Slider {...settings}>
          <div>
            <img
              src="http://demo.posthemes.com/pos_aboss/layout2/modules/posslideshows/images/c6098d9fa51d97b0674c1271f866481f19467bbb_slide2.jpg"
              alt=""
              className="banner-carousal-image"
            />
          </div>
          <div>
            <img
              src="http://demo.posthemes.com/pos_aboss/layout2/modules/posslideshows/images/b15003e37c4012965359b924f6b55c615b38312e_slide1.jpg"
              alt=""
              className="banner-carousal-image"
            />
          </div>
        </Slider>
      </div>
    )
  }
}

import React, { useState } from 'react'
import Slider from 'react-slick'
import _ from 'lodash'


export default function Carousal() {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    return (
        <div className="carousal">
            <Slider asNavFor={nav2} ref={slider1 => setNav1(slider1)}>
                {_.range(5).map((slide, index) => (
                    <div className="carousal_main" >
                        <img
                            className="carousal_main_image"
                            src={`https://picsum.photos/800/400?img=${index}`}
                        />
                    </div>
                ))}

            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {_.range(5).map((slide, index) => (
                    <div className="carousal_sec" key={index}>
                        <img
                            className="carousal_sec_image"
                            src={`https://picsum.photos/800/400?img=${index}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

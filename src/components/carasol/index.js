import React, { Component } from "react";
import Slider from "react-slick";

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
          };
    return (
        <div>
        <Slider {...settings}>
          <div>
            <img src="https://i.imgur.com/96OnkX7.png" alt="image 1" />
          </div>
          <div>
            <img src="https://i.imgur.com/KtGxwnN.png" alt="image 2" />
          </div>
          <div>
            <img src="https://i.imgur.com/sfjg9R8.png" alt="image 3" />
          </div>
          <div>
            <img src="https://i.imgur.com/p0wdadG.png" alt="image 4" />
          </div>
        </Slider>
      </div>
    )
    }
}
export default SimpleSlider;
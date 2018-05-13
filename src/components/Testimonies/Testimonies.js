import React from 'react';
import Link from 'gatsby-link';
import Slider from 'react-slick';

import './Testimonies.scss';

import testimony_data from './testimonies_data';

class Testimonies extends React.Component {
  constructor() {
    super();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000
    };
    return (
      <div className="testimonies-section ">
        <div className="sections-bg">
          <h2 className="quote-mark">
            &Prime;
          </h2>{' '}
          <div className="testimonies-title">
            <h1>

              What clients say{' '}
            </h1>
          </div>
          <div className="testimonies-container ">
            <Slider {...settings}>
              {testimony_data.map((item, key) => {
                return (
                  <div className="testimony" key={key}>
                    <div className="testimony-img">
                      <img src={item.img} alt="profile picture"/>
                    </div>
                    <div className="testimony-desc">
                      <p>{item.desc}</p>
                      <div className="testimony-author">
                        <p>{item.author}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonies;

import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Navigation/Navigation';
import BlueButton from '../../components/BlueButton/BlueButton';

import './Services.scss';

import services_data from './services_data';

const serviceImage = () => {
  return services_data.map((item, key) => {
    return (
      <div className="service" key={key}>
        <div className="overlay">
          <img className="service-image" src={item.image}/>
          <div className="service-info">
            <div className="service-type">{item.type}</div>
            <h3>{item.title}</h3>
            <div className="service-desc">{item.description}</div>
          </div>{' '}
        </div>
      </div>
    );
  });
};

const Services = () => (
  <div className="services-section" id="services">
    <div className="services-section-title container">
      <div>
        <h1>services</h1>
        <p>
          I offer a range of services to help you achieve your goals and get into shape
        </p>
      </div>
      <div>
        <BlueButton label="services"/>
      </div>
    </div>
    <div className="services-images">{serviceImage()}</div>
  </div>
);

export default Services;

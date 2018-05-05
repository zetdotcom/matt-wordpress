import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Navigation/Navigation';
import BlueButton from '../../components/BlueButton/BlueButton';

import './Programs.scss';

import programs_data from './programs_data';

const programImage = () => {
  return programs_data.map((item, key) => {
    return (
      <div className="program" key={key}>
        <div className="overlay">
          <img className="program-image" src={item.image} />
          <div className="program-info">
            <div className="program-type">{item.type}</div>
            <h3>{item.title}</h3>
            <div className="program-desc">{item.description}</div>
            <div className="program-button">
              <BlueButton label="Check Program" />
            </div>
          </div>{' '}
        </div>
      </div>
    );
  });
};

const Programs = () => (
  <div className="programs-section">
    <div className="programs-section-title container">
      <div>
        <h1>Programs & Diet </h1>
        <p>Programs and diets are deisgned to get you into shape</p>
      </div>
      <div>
        <BlueButton label="programs & diets" />
      </div>
    </div>
    <div className="programs-images">{programImage()}</div>
  </div>
);

export default Programs;

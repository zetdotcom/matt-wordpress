import React from 'react';
import Link from 'gatsby-link';

import BlueButton from '../../components/BlueButton/BlueButton';

import './About.scss';

import mattCut from '../../images/matt-header2.jpg';

const About = () => (
  <div className="about-page">
    <div>
      <div className="about-container">
        <div className="big-image">
          <img src={mattCut} alt="main matt image" />
        </div>
        <div className="about-content">
          <div className="page-title">Matt Wielunski</div>
          <div>
            <h1>About</h1>
          </div>
          <div className="about-description">
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
            wieków później zaczął być używany przemyśle elektronicznym,
            pozostając praktycznie niezmienionym. Spopularyzował się w latach
            60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających
            fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje{' '}
          </div>
          <BlueButton label="BIO" />
          <div className="small-images">
            <img src="" alt="image1" />
            <img src="" alt="image2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

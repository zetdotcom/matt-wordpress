import React from 'react';
import Link from 'gatsby-link';

import BlueButton from '../../components/BlueButton/BlueButton';

import './About.scss';

import mattCut from '../../images/matt-header2-noleg.png';
import mattAbout1 from '../../images/about-matt-1.jpg';
import mattAbout2 from '../../images/about-matt-2.jpg';
import mattAbout3 from '../../images/about-matt-3.jpg';
import mattAbout4 from '../../images/about-matt-4.jpg';

const About = () => (
  <div className="about-page" id="about">
    <div className="container">
      <div className="about-top">
        <div className="big-image">
          <img src={mattCut} alt="main matt image"/>
        </div>
        <div className="about-content">
          <div className="page-title">Matt Wielunski</div>
          <div>
            <h1>About</h1>
          </div>
          <div className="about-description">
            <p>
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
              poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza
              do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany
              przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował
              się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających
              fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje{' '}
            </p>
          </div>
          <BlueButton label="about"/>
          <div className="about-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MSqFN_AiHo4"
              frameBorder="0"
              allowFullScreen/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

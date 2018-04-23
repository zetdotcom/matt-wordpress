import React from 'react';
import Link from 'gatsby-link';

import BlueButton from '../../components/BlueButton/BlueButton';
import Coverflow from 'react-coverflow';

import './About.scss';

import mattCut from '../../images/matt-header2-noleg.png';
import mattAbout4 from '../../images/mat-4.jpg';
import mattAbout2 from '../../images/matt-about-2.jpg';
import mattAbout3 from '../../images/matt-about-3.jpg';
import mattAbout1 from '../../images/matt-about-1.jpg';

const Images = () => (
  <Coverflow
    width="960"
    height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src="image/path"
        alt="title or description"
        style={{
          display: 'block',
          width: '100%',
        }}
      />
    </div>
    <img
      src={mattAbout1}
      alt="title or description"
      data-action="http://andyyou.github.io/react-coverflow/"
    />
    <img
      src={mattAbout2}
      alt="title or description"
      data-action="http://andyyou.github.io/react-coverflow/"
    />
  </Coverflow>
);

export default Images;

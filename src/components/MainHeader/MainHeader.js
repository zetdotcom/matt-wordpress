import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Navigation/Navigation';
import BlueButton from '../../components/BlueButton/BlueButton';
import {FacebookIcon, InstaIcon} from '../SocialIcons/SocialIcons';

import './MainHeader.scss';

import logo from '../../images/logo-small.jpg';

const MainHeader = () => (
  <div className="main-header">
    <div className="titles container">
      <h1>Matt Wielunski</h1>
      <div className="titles-call">
        <p>
          Tutaj jakies fajne motywujace zdnaie ktore bedzie musial Matt wymyslic. Takie
          zeby bylo fajnie!{' '}
        </p>
      </div>
      <BlueButton label="Find out more"/>
    </div>
    <div className="header-icons">
      <h4>
        FOLLOW
      </h4>
      <FacebookIcon/>
      <InstaIcon/>
    </div>
  </div>
);

export default MainHeader;

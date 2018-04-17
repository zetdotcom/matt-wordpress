import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../Navigation/Navigation';
import BlueButton from '../../components/BlueButton/BlueButton';

import './MainHeader.scss';

import logo from '../../images/logo-small.jpg';

const MainHeader = () => (
  <div className="main-header">
    {/*
     
      <Navigation />
      <img
      src={logo}
      className="img-logo"
      alt="matt wielunski personal trainer logo"
    />*/}
    <div className="titles container">
      <h1>Matt Wielunski</h1>
      <div className="titles-call">
        Tutaj jakies fajne motywujace zdnaie ktore bedzie musial Matt wymyslic.
        Takie zeby bylo fajnie{' '}
      </div>
      <BlueButton label="Find out more" />
    </div>
  </div>
);

export default MainHeader;

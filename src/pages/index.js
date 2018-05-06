import React from 'react';
import Link from 'gatsby-link';

import MainHeader from '../components/MainHeader/MainHeader';
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import Programs from '../components/Programs/Programs';
import Services from '../components/Services/Services';
import Testimonies from '../components/Testimonies/Testimonies';

import shirtless from '../images/shirtless.jpg';

import '../styles/styles.scss';
import './index.scss';

const IndexPage = props => (
  <div className="index-page">
    <MainHeader />
    <Navigation />
    <div className="sections-bg">
      <About />
      <Programs />
    </div>
    <Services />
    <div className="motivationCall">
      <div className="motivationCall--left"> </div>
      <div className="motivationCall--right">
        <img src={shirtless} />
        <h1>
          {' '}
          THere are no shortcuts to success. If you want it you are going to
          have to work for it.{' '}
        </h1>
      </div>
    </div>
    <Testimonies />
    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/sample-page">Go to sample page</Link>
      <br />
      <Link to="/posts/hello-world">Go to samplepost hello word</Link>
    </div>
  </div>
);

export default IndexPage;

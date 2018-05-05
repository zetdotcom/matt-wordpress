import React from 'react';
import Link from 'gatsby-link';

import MainHeader from '../components/MainHeader/MainHeader';
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import Programs from '../components/Programs/Programs';
import Services from '../components/Services/Services';

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

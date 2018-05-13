import React from 'react';
import Link from 'gatsby-link';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram'

import './SocialIcons.scss';

export const FacebookIcon = props => (

  <a
    className="facebook-icon social-icons"
    href="https://www.facebook.com/mattwlifecoach/"
    target="blank">
    <FaFacebook/>
  </a>

);

export const InstaIcon = props => (

  <a
    className="insta-icon social-icons"
    href="https://www.instagram.com/explore/locations/1532643340284243/matt-wielunski-personal-training/"
    target="blank">
    <FaInstagram/>
  </a>

);
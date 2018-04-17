import React from 'react';
import Link from 'gatsby-link';

import './BlueButton.scss';
import '../../styles/styles.scss';

const BlueButton = props => (
  <div className="blue-button">
    {props.label} <span className="arrow">&rarr;</span>
  </div>
);

export default BlueButton;

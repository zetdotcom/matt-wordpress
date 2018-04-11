import React from 'react'
import Link from 'gatsby-link'

import './Navigation.scss'
import '../../styles/styles.scss'

const Navigation = () => (
  <div className="navigation">
    <ul className="link">
      <li>
        <Link to="#">Home</Link>
      </li>
      <li>
        <Link to="#">Bio</Link>
      </li>
      <li>
        <Link to="#">Programs & Diet</Link>
      </li>
      <li>
        <Link to="#">Services</Link>
      </li>
      <li>
        <Link to="#">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Navigation

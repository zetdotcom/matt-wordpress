import React from 'react'
import Link from 'gatsby-link'

import './MainHeader.scss'

import Navigation from '../Navigation/Navigation'

const MainHeader = () => (
  <div className="main-header">
    <Navigation />
    <div className="titles">
      <h1>Matt Wielunski</h1>
    </div>
  </div>
)

export default MainHeader

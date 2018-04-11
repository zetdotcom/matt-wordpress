import React from 'react'
import Link from 'gatsby-link'

import './MainHeader.scss'

import Navigation from '../Navigation/Navigation'

const MainHeader = () => (
  <div className="main-header">
    <Navigation />
    <div className="titles container">
      <h1>Matt Wielunski</h1>
      <div className="titles-call">
        Tutaj jakies fajne motywujace zdnaie ktore bedzie musial Matt wymyslic.
        Takie zeby bylo fajnie{' '}
      </div>
    </div>
  </div>
)

export default MainHeader

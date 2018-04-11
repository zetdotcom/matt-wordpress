import React from 'react'
import Link from 'gatsby-link'

import MainHeader from '../components/MainHeader/MainHeader'

const IndexPage = () => (
  <div>
    <MainHeader />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/sample-page">Go to sample page</Link>
    <br />
    <Link to="/posts/hello-world">Go to samplepost hello word</Link>
  </div>
)

export default IndexPage

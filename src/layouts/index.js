import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import StateComp from './state';

import './index.scss';
import '../styles/styles.scss';
import '../styles/colors.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]');
}

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this
      .toggleMenu
      .bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.open
    });
  }

  render() {
    const childWithProp = function () {
      React
        .Children
        .map(this.props.children, child => {
          return React.cloneElement(child, {globalState: this.state});
        });
    };

    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
          {
            name: 'description',
            content: 'Sample'
          }, {
            name: 'keywords',
            content: 'sample, something'
          }
        ]}/>

        <div>{this
            .props
            .children()}</div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

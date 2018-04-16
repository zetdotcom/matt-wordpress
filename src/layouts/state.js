import React from 'react';
import PropTypes from 'prop-types';

class StateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.open,
    });
  }

  render() {
    return <span />;
  }
}

export default StateComp;

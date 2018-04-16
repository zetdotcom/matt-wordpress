import React from 'react';
import Link from 'gatsby-link';
import HamburgerMenu from 'react-hamburger-menu';

import './Navigation.scss';
import '../../styles/styles.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      innerWidth: window.innerWidth,
      top: '0%',
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    //when resizing with window less than 740px and menu was opened it keeps menu opened
    if (window.innerWidth < 740 && this.state.open) {
      this.setState({
        top: '0px',
      });
    } else if (window.innerWidth > 740) {
      //when window made more than 740px brings normal menu back and sets state for resp menu to false
      this.setState({
        open: false,
        top: '50px',
      });
    } else if (window.innerWidth < 740) {
      //hides resp menu when window less than 740px
      this.setState({ top: '-100%' });
    }
  }
  toggleMenu() {
    this.setState({
      open: !this.state.open,
    });
    if (this.state.open) {
      this.setState({
        top: '-100%',
      });
    } else {
      this.setState({
        top: '0px',
      });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const stylele = () => {
      if (window.innerWidth < 740) {
        return this.state.open ? '0%' : '-100%';
      } else {
        return '0%';
      }
    };

    return (
      <div>
        {console.log(window.innerWidth)}
        <div className="hamburger">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.toggleMenu.bind(this)}
            onClick={this.updateDimensions}
            width={0}
            height={0}
            strokeWidth={2}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div className="navigation" style={{ top: this.state.top }}>
          {console.log(this.state.top, this.state.open)}

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
      </div>
    );
  }
}

export default Navigation;

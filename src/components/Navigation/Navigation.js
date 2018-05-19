import React from 'react';
import Link from 'gatsby-link';
import HamburgerMenu from 'react-hamburger-menu';

import './Navigation.scss';
import '../../styles/styles.scss';

class Navigation extends React.Component {
  constructor(props) {
    {
      /*
    if the build will be working without it, then this can be removed
  if (typeof window !== 'undefined');   */
    }
    super(props);
    this.state = {
      open: false,
      menuClass: 'a'
    };

    this.setMenuClass = this
      .setMenuClass
      .bind(this);

    this.toogleMenu = this
      .toggleMenu
      .bind(this);
  }
  componentDidMount() {
    this.setMenuClass();
    window.addEventListener('resize', this.setMenuClass);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.setMenuClass);
  }

  setMenuClass() {
    /* when resizing with window less than 740px and menu was opened it keeps menu
    opened */
    if (window.innerWidth < 740 && this.state.open) {
      this.setState({menuClass: 'navigation--open'});
    } else if (window.innerWidth > 740) {
      // when window made more than 740px brings normal menu back and sets state for
      // resp menu to false
      this.setState({open: false, menuClass: 'navigation'});
    } else if (window.innerWidth < 740) {
      //hides resp menu when window less than 740px
      this.setState({menuClass: 'navigation--close'});
    }
  }
  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
    if (this.state.open) {
      this.setState({menuClass: 'navigation--close'});
    } else {
      this.setState({menuClass: 'navigation--open'});
    }
  }

  render() {
    return (
      <div>
        <div className="hamburger">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this
            .toggleMenu
            .bind(this)}
            onClick={this.setMenuClass}
            width={0}
            height={0}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}/>
        </div>
        <div className={this.state.menuClass}>
          <ul className="link">
            <li>
              <a href="#" onClick={this.toogleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={this.toogleMenu}>About</a>
            </li>
            <li>
              <a href="#programs" onClick={this.toogleMenu}>Programs & Diet</a>
            </li>
            <li>
              <a href="#services" onClick={this.toogleMenu}>Services</a>
            </li>
            <li>
              <a href="/posts" onClick={this.toogleMenu}>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;

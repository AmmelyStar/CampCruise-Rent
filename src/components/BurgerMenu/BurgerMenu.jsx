import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
    alert('Settings clicked'); // For demonstration purposes, you can replace this with your actual settings functionality
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;

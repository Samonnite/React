import React, { Component } from 'react'
import Logo from '../images/logo.png'

export default class MobileHeader extends Component {
  render() {
    return (
      <div id="mobileheader">
        <header>
          <a href="/" className="logo">
            <img src={Logo} alt="logo" />
            <span>ReactNEWS</span>
          </a>
        </header>
      </div>
    )
  }
}

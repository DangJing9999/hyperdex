import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { links } from './config'

export default class CookieBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie_accepted: localStorage.getItem('cookie_accepted')
    };
  }

  render() {
    const { cookie_accepted } = this.state

    return (
      <div className="fixed-bottom animated" style={ cookie_accepted ? { visibility: 'hidden', opacity: '0' } : { visibility: 'visible', opacity: '1' } }>
          <div className="cookie-text">
              This website uses only <Link to={links.COOKIE_DISCLAIMER}>strictly necessary cookies</Link>. No user data is stored according to our <Link to={links.PRIVACY_POLICY}>privacy policy</Link>.
          </div>
          <span>
              <div className="cookie-button" onClick={ () => { 
                  this.setState({ cookie_accepted: true })
                  localStorage.setItem('cookie_accepted', true)
                }}>
                <div className="button-text">Accept</div>
              </div>
          </span>
      </div>
    )
  }

}
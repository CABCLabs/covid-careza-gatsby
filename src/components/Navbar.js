import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="#careZA" style={{ width: "108px" }} />
            </Link>
            {/* Hamburger menu */}
            {
              // eslint-disable-next-line
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            }
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item navItemGen whiteNav" to="/ronald">
                #Ronald
              </Link>
            <Link className="navbar-item navItemGen blueNav" to="/">
                Home
              </Link>
              <Link className="navbar-item navItemGen yellowNav" to="/about">
                About
              </Link>
              <Link className="navbar-item navItemGen redNav" to="/join">
                Join
              </Link>
              <Link className="navbar-item navItemGen greenNav" to="/blog">
                News
              </Link>
              <Link className="navbar-item navItemGen  blackNav" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered"></div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

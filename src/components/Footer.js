import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    {[
                      { label: "Home", link: "/" },
                      { label: "Join us", link: "/covid/pledge" },
                      { label: "About", link: "/about" },
                      { label: "Contact", link: "/contact" }
                    ].map(({ label, link }) => (
                      <li key={label}>
                        <Link to={link} className="navbar-item">
                          {label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="column is-4">
                <section className="menu social">
                  <ul className="menu-list">
                    <li>
                      <a
                        className="navbar-item"
                        title="facebook"
                        href="https://facebook.com"
                      >
                        <span>
                          <img src={facebook} alt="Facebook" />
                        </span>{" "}
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        title="twitter"
                        href="https://twitter.com"
                      >
                        <span>
                          <img
                            className="fas fa-lg"
                            src={twitter}
                            alt="Twitter"
                          />
                        </span>{" "}
                        Twitter
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="copyright">
              copyright © {new Date().getFullYear()} The Center for Analytics
              and Behavioural Change
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

import React from "react";
import { Link } from "gatsby";
import logo from "../img/white-careZA.png"
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer  has-text-white-ter">
      <div className="content has-text-centered">
      
      </div>
      <div style={{paddingTop: '40px'}} className="has-background-black">
      <div className="content has-text-centered has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
      <img
          src={logo}
          alt="CABC Logo"
          style={{ width: '22em' }}
        />
          <div className="columns">
            <div className="column is-12 social">
              <a title="facebook" href="https://www.facebook.com/careZASocial/" target="blank">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="twitter" href="https://twitter.com/wecareza" target="blank">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
          <div className="columns">
            <div className="column is-12 social">
              <h4 className="footerContact"><a className="footerTextLink" target="blank" href="mailto:info@cabc.org.za">info@cabc.org.za</a><a className="footerTextLink" target="blank" href="https://sacoronavirus.co.za/">sacoronavirus.co.za</a></h4>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
      
    );
  }
};

export default Footer;

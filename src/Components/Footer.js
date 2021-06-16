import React, { Component } from "react";
import Fade from "react-reveal";

const socials = [
  {
    "name":"facebook",
    "url":"",
    "className":"fa fa-facebook"
  },
  {
    "name":"twitter",
    "url":"",
    "className":"fa fa-twitter"
  },
  {
    "name":"linkedin",
    "url":"",
    "className":"fa fa-linkedin"
  },
  {
    "name":"instagram",
    "url":"",
    "className":"fa fa-instagram"
  },
  {
    "name":"github",
    "url":"https://github.com/qxf2",
    "className":"fa fa-github"
  }
];

class Footer extends Component {
  render() {

    const networks = socials.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return(
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy;  Qxf2 Services 2013 - 2021</li>
                
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

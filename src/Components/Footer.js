import React, { Component } from "react";
import Fade from "react-reveal";

const socials = [
  {
    "name":"github",
    "url":"https://github.com/qxf2",
    "className":"fa fa-github"
  },
  {
    "name":"linkedin",
    "url":"https://www.linkedin.com/company/3586569/admin/",
    "className":"fa fa-linkedin"
  },
  {
    "name":"twitter",
    "url":"https://twitter.com/Qxf21",
    "className":"fa fa-twitter"
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

    const copyright_end = new Date().getFullYear();

    return(
      <footer style={{
        paddingBottom : "20px",
        backgroundColor : "	#000524"
      }}>
        <div className="row" id="footer" >
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy;  Qxf2 Services 2013 - {copyright_end}</li>
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

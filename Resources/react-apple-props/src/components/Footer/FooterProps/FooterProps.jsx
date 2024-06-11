// import React, { Component } from 'react'

// export default class FooterProps extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
import React, { Component } from "react";

export default class FooterProps extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <h2>{this.props.aboutTitle}</h2>
            <p>{this.props.aboutDescription}</p>
          </div>
          <div className="footer-section links">
            <h2>{this.props.linksTitle}</h2>
            <ul>
              {this.props.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>{this.props.contactTitle}</h2>
            <div className="contact-info">
              <span>
                <i className="fas fa-phone"></i> {this.props.phone}
              </span>
              <span>
                <i className="fas fa-envelope"></i> {this.props.email}
              </span>
              <span>
                <i className="fas fa-map-marker-alt"></i> {this.props.address}
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{this.props.copyright}</p>
        </div>
      </footer>
    );
  }
}

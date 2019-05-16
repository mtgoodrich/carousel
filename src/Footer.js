import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul>
          <li>&copy; Aut-19 Company, Inc.</li>
          <li>
            <a href="#policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms</a>
          </li>
        </ul>
      </nav>

      <a href="#top" className="footer__top-link">
        Back to top
      </a>
    </footer>
  );
};

export default Footer;

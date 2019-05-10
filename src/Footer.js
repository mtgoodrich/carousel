import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <nav class="footer__nav">
        <ul>
          <li>
            <copyright>&copy; Aut-19 Company, Inc.</copyright>
          </li>
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

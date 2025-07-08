import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const year = new Date().getFullYear();

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div" role="contentinfo" aria-label="Site footer">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {year} DeveloperFolio Team. Modified by Laya Karavadi.
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"} style={{ fontSize: "0.8rem" }}>
          Licensed under the{" "}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.en.html"
            target="_blank"
            rel="noreferrer"
          >
            GNU General Public License v3.0
          </a>
        </p>
      </footer>
    </Fade>
  );
}

import React from "react";
import './style.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Copyright © {year} Ibrahim Mohamed
        <a
          href="https://github.com/Ibrahim-Mohamed45"
          target="_blank"
          rel="noreferrer"
          className="test"
        >
          <i
            className="fa fa-github github"
            style={{ color: "black", fontSize: "26px" }}
          ></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;

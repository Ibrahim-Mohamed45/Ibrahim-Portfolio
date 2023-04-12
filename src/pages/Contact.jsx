import React from "react";
import styles from "../styles/Contact.module.css";
import cv from "../data/CV.pdf";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.padding}></div>
      <h1 className={styles.header}>Contact Me</h1>
      <div className="row">
        <div className={styles.display}>
          <div className={styles.socials}>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/ibrahim-mohamed-15ab4221a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <i
                    className="fa fa-linkedin-square"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ibrahim-Mohamed45"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ibrahim.mohamed1218@gmail.com"
                  target="_blank"
                  className={styles.hidden}
                  rel="noreferrer"
                >
                  Email me
                  <i
                    className="fa fa-envelope"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447939809870"
                  className={styles.hidden}
                  target="_blank"
                  rel="noreferrer"
                >
                  Call me
                  <i className="fa fa-phone" style={{ fontSize: "36px" }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className={styles.formDiv}>
            <form
              action="https://formsubmit.co/ibrahim.mohamed1218@gmail.com"
              method="POST"
            >
              <h3>GET IN TOUCH</h3>
              <input type="hidden" name="_subject" value="New submission!" />
              <input type="hidden" name="_next" value="https://ibrahim-mohamed45.github.io/Thank-you-page/" />
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                rows="5"
                cols="60"
                placeholder="Your message"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.socials}>
            <ul className={styles.contactMe}>
              <li>
                <a
                  href="mailto:ibrahim.mohamed1218@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email me
                  <i
                    className="fa fa-envelope"
                    style={{ fontSize: "36px" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="tel:+447939809870" target="_blank" rel="noreferrer">
                  Call me
                  <i className="fa fa-phone" style={{ fontSize: "36px" }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href={cv} download>
        <button className={styles.btnCV}>
          Download CV
          <i
            className="fa fa-download"
            aria-hidden="true"
            style={{ fontSize: "24px" }}
          ></i>
        </button>
      </a>
      </div>
    </section>
  );
}

export default Contact;

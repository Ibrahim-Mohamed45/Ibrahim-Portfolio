import React from "react";
import Avatar from "../images/Ibrahim-Avatar.png";
import Devices from "../images/devices.png";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <section className={styles.homePage}>
      <div className={styles.title}>
        <h1>Ibrahim Mohamed</h1>
        <p>Frontend Developer</p>
        <img src={Avatar} alt="Avatar of me" />
      </div>
      <img src={Devices} className={styles.devices} alt="Pic of devices" />
      <div className={styles.about}>
        <h2>Hi, I'm Ibrahim. Nice to meet you.</h2>
        <p>
          I'm an aspiring web developer who is intrested in all things
          Javascript. I recently completed the EDx Trilogy Skills Bootcamp
          in Front-End Web Development where I learnt the skills required
          to be a front end web developer. I am looking for opportunities to 
          work with a Javascript framework. Besides coding, I enjoy playing 
          and watching football & basketball, watching tv shows and travelling.
        </p>
        <h2>My skills:</h2>
        <div className={styles.skills}>
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/html.png" alt="HTML logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/css.png" alt="CSS logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/bootstrap.png" alt="Bootstrap logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/tailwind.png" alt="Tailwind logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/js.png" alt="JavaScript logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/react.png" alt="React logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/jquery.png" alt="Jquery logo" />
          <img src="https://raw.githubusercontent.com/Ibrahim-Mohamed45/React-Portfolio/main/src/images/git.png" alt="Git logo" />
        </div>
      </div>
    </section>
  );
}

export default Home;

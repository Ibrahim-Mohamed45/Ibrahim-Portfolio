import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            to="/Ibrahim-Portfolio"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Ibrahim-Projects"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Contact-Ibrahim"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

import styles from "../styles/Navbar.module.css";
import React from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={`${styles["container"]} ${styles["container--flex"]}`}>
        <h1 className={`${styles["navbar-logo"]}`}>Sebastian Yii</h1>
        <nav>
          <ul className={`${styles["navlist"]}`}>
            <li className={`${styles["nav-item"]}`}>
              <a href="#" className={`${styles["nav-link"]}`}>
                About
              </a>
            </li>
            <li className={`${styles["nav-item"]}`}>
              <a href="#" className={`${styles["nav-link"]}`}>
                Experience
              </a>
            </li>
            <li className={`${styles["nav-item"]}`}>
              <a href="#" className={`${styles["nav-link"]}`}>
                My Projects
              </a>
            </li>
            <li className={`${styles["nav-item"]}`}>
              <a href="#" className={`${styles["nav-link"]}`}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

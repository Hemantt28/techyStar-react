import React from 'react';
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerTop}>
        <h3>TechyStar</h3>
        <p>@all right reserved</p>
      </div>

      <div className={styles.footerBottom}>
        <h3>Follow Us</h3>
        <div>
          <a href="#">
            Youtube
          </a>
          <a href="#">
            Instagram
          </a>
          <a href="#">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
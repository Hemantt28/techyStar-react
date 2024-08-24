import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

function Header() {
  // Correct useState syntax
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <h1>TechyStar</h1>
        <main className={styles.containerMain}>
          <HashLink to={"/#home"}>Home</HashLink>
          <Link to={"/contact"}>Contact</Link>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#brands"}>Brands</HashLink>
          <Link to={"/services"}>Services</Link>
        </main>
        <div className={styles.menuIcon} onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu />
        </div>
      </nav>

      {menu && (
        <div className={styles.mobileMenu}>
          <HashLink to={"/#home"} onClick={() => setMenu(!menu)}>Home</HashLink>
          <Link to={"/contact"} onClick={() => setMenu(!menu)}>Contact</Link>
          <HashLink to={"/#about"} onClick={() => setMenu(!menu)}>About</HashLink>
          <HashLink to={"/#brands"} onClick={() => setMenu(!menu)}>Brands</HashLink>
          <Link to={"/services"} onClick={() => setMenu(!menu)}>Services</Link>
        </div>
      )}
    </>
  );
}

export default Header;

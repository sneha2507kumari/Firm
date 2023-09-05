import React from 'react'
import Logo from '../Logo/Logo';
import styles from "../../components/Navbar/NavbarIcon.module.css";
import Button from '../Button/Button';
import Hero from "../Hero/Hero";


const NavbarIcon = () => {
  return (
    <>
    <div className={styles.topbar}>
    <div className={styles.wrapper}>
  <Logo className={styles.logo} />
  <nav className={styles.navbar}>
    <ul className={styles.navbarlinks}>
      <li>Home</li>
      <li>Attorneys</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  </nav>
  <div className={styles.buttonmain}>
    <Button childern ="Contact Now"/> 
  </div> 
  </div>
  <div className={styles.heroWrapper}>
    <Hero />
  </div>
</div>
  </>
  )
}

export default NavbarIcon
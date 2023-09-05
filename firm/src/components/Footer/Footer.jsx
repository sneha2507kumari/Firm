import React from 'react';
import styles from '../Footer/Footer.module.css';
import Logo from '../Logo/Logo';
import Facebook from '../../assets/Facebook.png';
import Insta from '../../assets/Insta.png';
import Twitter from '../../assets/Twitter.png';
import Pri from '../../assets/Pri.png';

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainwrap}>
          <Logo className={styles.logo} />
          <nav className={styles.navbar}>
            <ul className={styles.navbarlinks}>
              <li>Home</li>
              <li>Attorneys</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className={styles.wrapperimg}>
            <img src={Insta} alt="Insta" />
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Pri} alt="Print" />
          </div>
          </div>
        <div className={styles.extra}>
          <div>© 2020 Acme. All right reserved.</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;

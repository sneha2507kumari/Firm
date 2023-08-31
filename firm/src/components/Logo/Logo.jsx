import React from 'react';
import logoImage from "../../assets/Logo.png";
import styles from '../../components/Logo/Logo.module.css';

const Logo = () => {
  return (
    <img src={logoImage} alt="logo" className={styles.wrapper}/>
  )
}

export default Logo
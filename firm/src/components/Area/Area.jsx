import React from 'react';
import Businesslaw from "../../assets/Businesslaw.png";
import Partnership from "../../assets/Partnership.png";
import Real from "../../assets/Real.png";
import Business from "../../assets/Business.png";
import Lord from "../../assets/Lord.png";
import Elder from "../../assets/Elder.png";
import styles from "../Area/Area.module.css";

const Area = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.head}><h3 className={styles.topic}>Area of Practices</h3></div>
      <div className={styles.wrapper}>
      <div className={styles.one}><img src={Businesslaw} alt="Businesslaw"/></div>
      <div className={styles.two}><img src={Partnership} alt="Partnership"/></div>
      <div className={styles.three}><img src={Real} alt="Real"/></div>
      <div className={styles.four}><img src={Business} alt="Business"/></div>
      <div className={styles.five}><img src={Lord} alt="Lord"/></div>
      <div className={styles.six}><img src={Elder} alt="Elder"/></div>
      </div>
      
    </div>
    </>
    
  )
}

export default Area
import React from 'react';
import styles from "../Hero/Hero.module.css";
import Message from "../../assets/Message.png";
import HeroPic from "../../assets/HeroPic.png";

const Hero = () => {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.main}>
        <h3 className={styles.wrapper}>You don’t have to Fight them Alone.</h3>
        <p className={styles.subwrapper}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <div className={styles.buttonwrap}>
          <img src={Message} alt="Icon"/>Enter your email address
          <div className={styles.subbuttonwrap}>
        let's Talk</div>
      </div>    
    </div>
    <div className={styles.picimage}>
        <img src={HeroPic} alt="Icon"/>
    </div>
    </div>
    </>
  )
}

export default Hero
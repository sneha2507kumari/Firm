import React from 'react';
import styles from "../Intro/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h4>Let’s Introduce Ourself</h4>
        </div>
        <div className={styles.line}></div> 
        <div className={styles.submain}>
            <h5 className={styles.head}>Criminal Lawyer</h5>
            <p className={styles.lines}>Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exercitation.</p>     
        </div>
    </div>
    
  )
}

export default Intro
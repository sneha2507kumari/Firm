import React from 'react';
import styles from "../Card/Card.module.css";
import Gift from "../../assets/Gift.png";

const Card = () => {
  return (
    <div className={styles.main}>
        <div className={styles.title}><h2 className={styles.subtitle}>Why  Choose  us?</h2></div>
        <div className={styles.maincard}>
        <div className={styles.card}>
            <div className={styles.giftimg}><img src={Gift} className={styles.imgicon} alt="gift"/></div>
            <div className={styles.headdiv}><h4 className={styles.head}>98% Success Rate</h4></div>
            <div className={styles.subheaddiv}><p className={styles.subhead}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p></div>
            <div className={styles.buttondiv}><p className={styles.button}>Read more</p></div>
        </div>
        <div className={styles.card} style={{  background: '#2E2E2E' }}>
            <div className={styles.giftimg}><img src={Gift} className={styles.imgicon} alt="gift"/></div>
            <div className={styles.headdiv}><h4 className={styles.head}>100% Success Rate</h4></div>
            <div className={styles.subheaddiv}><p className={styles.subhead}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p></div>
            <div className={styles.buttondiv}><p className={styles.button}>Read more</p></div>
        </div>
        <div className={styles.card}>
            <div className={styles.giftimg}><img src={Gift} className={styles.imgicon} alt="gift"/></div>
            <div className={styles.headdiv}><h4 className={styles.head}>100% Success Rate</h4></div>
            <div className={styles.subheaddiv}><p className={styles.subhead}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p></div>
            <div className={styles.buttondiv}><p className={styles.button}>Read more</p></div>
            

             
        </div>
        </div>

    </div>
    
  )
}

export default Card
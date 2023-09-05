import React from 'react';
import styles from "../Client/Client.module.css";
import Left from "../../assets/Left.png";
import Right from "../../assets/Right.png";
import Jane from "../../assets/Jane.png";
import Devon from "../../assets/Devon.png";
import Robert from "../../assets/Robert.png";


const Client = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.head}>
        <h3 className={styles.headclient}>What says our happy Clients</h3>
      </div>
      <div className={styles.icondiv}>
        <img src={Left} alt="leftArrow" className={styles.leftsubicondiv}/>
        <img src={Right} alt="RightArrow" className={styles.rightsubicondiv}/>
      </div>
      <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.imageswrap}>
          <img src={Jane} alt="Jane Copper" className={styles.firstimg}/>
        </div>
        <div className={styles.name}>
          <h4>Jane Copper</h4>
        </div>
        <div className={styles.bio}>
          <h6>Ceo of Hunt</h6>
        </div>
        <p className={styles.about}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageswrap}>
          <img src={Devon} alt="Devon Lane" className={styles.firstimg}/>
        </div>
        <div className={styles.name}>
          <h4>Devon Lane</h4>
        </div>
        <div className={styles.bio}>
          <h6>Ceo of Hunt</h6>
        </div>
        <p className={styles.about}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageswrap}>
          <img src={Robert} alt="Robert Fox" className={styles.firstimg}/>
        </div>
        <div className={styles.name}>
          <h4>Robert Fox</h4>
        </div>
        <div className={styles.bio}>
          <h6>Ceo of Hunt</h6>
        </div>
        <p className={styles.about}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia
        </p>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default Client
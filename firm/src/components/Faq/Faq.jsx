import React from 'react';
import styles from "../Faq/Faq.module.css";

const Faq = () => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.head}>FAQ</div>
        <div className={styles.wrap}>
        <div className={styles.paradiv}>
            <p className={styles.para}>Amet minim mollit non deserunt ullamco est sit <br/> aliqua dolor do amet sint. </p>
        </div>
        
        <div className={styles.wrapper}>
            <div className={styles.que1div}><h4 className={styles.que1}>
            Do I need a personal injury report?
            </h4></div>
            <div className={styles.que1ansdiv}><p className={styles.que1ans}>
            Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint. Velit officia consequatduis<br/> enim velit mollit Exer. Amet minim mollit non deserunt<br/>ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p></div>
            <hr className={styles.hrstyled} />
            <div className={styles.que2div}><h4 className={styles.que2}>
            How much is my case worth?
            </h4>
            <div className={styles.circleimg}><h3>+</h3></div></div>
            <hr className={styles.hrstyled}/>
            <div className={styles.que2div}><h4 className={styles.que3}>
            What should I do right after car accidect
            </h4><div className={styles.circleimg}><h3>+</h3></div></div>
            <hr className={styles.hrstyled}/>
            <div className={styles.que2div}><h4 className={styles.que4}>
            How much is my case worth?
            </h4><div className={styles.circleimg}><h3>+</h3></div></div>

        </div>
        </div>

    </div>
    <div className={styles.mainrec}>
        <div className={styles.subdiv}>
            <h3 className={styles.sub}>
            Subscribe Our Newsletter
            </h3>
        </div>
        <div className={styles.buttonstyles}>
        <button className={styles.button1}><div className={styles.but}>Name</div></button>
        <button className={styles.button2}><div className={styles.but2}>Enter your email</div></button>
        <button className={styles.button3}><div className={styles.but3}>Send</div></button>
        </div>

    </div>
    </>
    
  )
}

export default Faq
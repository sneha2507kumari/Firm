import React from 'react';
import Danial from "../../assets/Danial.png";
import Sanfole from "../../assets/Sanfole.png";
import Cesforila from "../../assets/Cesforila.png";
import Colleen from "../../assets/Colleen.png";
import Haldone from "../../assets/Haldone.png";
import Nik from "../../assets/Nik.png";
import styles from "../Team/Team.module.css";


const Team = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.head}>
        <h3 className={styles.headmain}>Our Team</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.firstdiv}>
          <div className={styles.firstimg}>
            <img src={Danial} alt="img"/>
          </div>
            <div className={styles.subfirstdiv}>
                  <div className={styles.firsthead}>
                    <div className={styles.firstheadstylediv}></div><h5 className={styles.firstheadstyle}>Danial Def</h5>
                    <div className={styles.firstparadiv}><p className={styles.firstpara}>301 Cases</p></div>
                  </div>
            </div> 
          </div>
        <div className={styles.seconddivrec}>
        <div className={styles.seconddiv}>
          <div className={styles.secondimg}>
            <img src={Sanfole} alt="img"/>
            </div>
            <div className={styles.subseconddiv}>
                  <div className={styles.secondhead}>
                  <div className={styles.secondheadstylediv}><h5 className={styles.secondheadstyle}>Sanfole</h5></div>
                  <div className={styles.secondparadiv}><p className={styles.secondpara}>850 Cases</p></div>
                  </div>
            </div> 
          </div>
        </div>
        <div className={styles.thirddiv}>
          <div className={styles.thirdimg}>
            <img src={Cesforila} alt="img"/>
            </div>
            <div className={styles.subthirddiv}>
                  <div className={styles.thirdhead}>
                  <div className={styles.thirdheadstylediv}><h5 className={styles.thirdheadstyle}>Cesforila</h5></div>
                  <div className={styles.thirdparadiv}><p className={styles.thirdpara}>470 Cases</p></div> 
                  </div>
            </div> 
          </div>
        <div className={styles.fouthdiv}>
          <div className={styles.fouthimg}>
            <img src={Colleen} alt="img"/>
            </div>
            <div className={styles.subfouthdiv}>
                  <div className={styles.fouthhead}>
                  <div className={styles.fouthheadstylediv}><h5 className={styles.fouthheadstyle}>Colleen</h5></div>  
                  <div className={styles.fouthparadiv}><p className={styles.fouthpara}>180 Cases</p></div>  
                  </div>
            </div> 
          </div>
        <div className={styles.fivediv}>
          <div className={styles.fiveimg}>
            <img src={Haldone} alt="img"/>
            </div>
            <div className={styles.subfivediv}>
                  <div className={styles.fivehead}>
                  <div className={styles.fiveheadstylediv}><h5 className={styles.fiveheadstyle}>Haldone</h5></div>  
                  <div className={styles.fiveparadiv}><p className={styles.fivepara}>212 Cases</p></div>  
                  </div>
            </div> 
          </div>
        <div className={styles.sixdiv}>
          <div className={styles.siximg}>
            <img src={Nik} alt="img"/>
            </div>
            <div className={styles.subsixdiv}>
                  <div className={styles.sixhead}>
                  <div className={styles.sixheadstylediv}><h5 className={styles.sixheadstyle}>Nik Jeo</h5></div>  
                  <div className={styles.sixparadiv}><p className={styles.sixpara}>350 Cases</p></div>  
                  </div>
            </div> 
          </div>
      </div>
        
    </div>
    </>
  )
}

export default Team
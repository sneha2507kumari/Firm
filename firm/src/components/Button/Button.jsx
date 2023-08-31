import React from 'react'
import styles from "../Button/Button.module.css";

const Button = ({childern}) => {
  return (
    <button className={styles.button}>{childern}</button>
  )
}

export default Button
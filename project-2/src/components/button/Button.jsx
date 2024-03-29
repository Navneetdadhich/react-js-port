import React from 'react'
import styles from './Button.module.css';
// import { MdMessage } from "react-icons/md";
const Button = (props) => {
  return (
    <div
    className={ props.isOutline ? styles.second_col : styles.primary_col }>
        {props.icon}{props.text}
        </div>
  )
}

export default Button
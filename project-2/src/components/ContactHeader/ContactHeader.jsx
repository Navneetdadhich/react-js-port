import React from 'react'
import styles from './ContactHeader.module.css';
console.log(styles)
const ContactHeader = () => {
  return (
    <div className={` ${styles.contact_header} container`}>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Pariatur ducimus <br /> cum quasi repellendus  facilis obcaecati
             iure cupiditate, animi ipsa <br /> amet vero adipisci, nam 
             dignissimos error, distinctio fuga sed sapiente similique.</p>
    </div>
  )
}

export default ContactHeader
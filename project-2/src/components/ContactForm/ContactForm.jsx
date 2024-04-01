import React from 'react'
import Button from '../button/Button'
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';
const ContactForm = () => {

  const onSubmit = (event) => {
    console.log(event);
  }
  return (
    <section className={styles.sec}>
        <div className={styles.contact_form}>
            <div className={styles.call}>
               <Button text = "VIA TEXT" icon = {< MdMessage fontSize='20px' />} />
               <Button text = "Call" icon = {< IoCall fontSize='20px' />} />
            </div>
            <Button isOutline={true} text = "E-Mail" icon = {< HiMail fontSize='20px' />} />

            <form onSubmit = { onSubmit }
            className={styles.form_cont}>
                <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                </div>

                <div className={styles.mail_control}>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" />
                </div>

                <div className={styles.text_control}>
                <label htmlFor="text">Text</label>
                <input type="text" name="text" />
             
                </div>
                <Button  text = "Submit"  />
                {/* <div>{ name + " " + email + " " + text} </div> */}
            </form>
      
        </div>
        <img src="/images/contact.png" alt="" />
    </section>
  )
}

export default ContactForm
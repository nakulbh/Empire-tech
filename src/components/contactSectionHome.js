import React from 'react'
import styles from "@/styles/contactSection.module.css"

const ContactSection = () => {
  return (
    <div>
         <div className={styles.contactSection}>
    <div className={styles.low}>
    <h1>Reach out to us to know how we can
help you reach out to your prospects.</h1>
    </div>
    <div className={styles.up}>
    contact us : +91 8400921622 <br />
    Mail us : Satyam@empiretechnologies@gmail.com
    </div>
    </div>
    </div>
  )
}

export default ContactSection

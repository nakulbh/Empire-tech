import React from 'react'
import styles from "@/styles/priceCard.module.css"

const Pricecard = (params) => {
  return (
    <div className="transition-opacity duration-500 ease-in-out hover:opacity-90">
         <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.title}>{params.service}</div>
      <div className={styles.price}>{params.price}</div>
      <div className={styles.description}>
        <ul>
          <li>{params.key1}</li>
          <li>{params.key2}</li>
          <li>{params.key3}</li>
          <li>{params.key4}</li>
          
        </ul>
      </div>
    </div>
    <button className={styles.button}>
     Check plan
    </button>
  </div>
    </div>
  )
}

export default Pricecard

import React from 'react'
import styles from "@/styles/admin.module.css"

const Table = () => {
  return (
    <div>
    <table className={styles.table}>
        <thead className={styles.thead}>
            <th className={styles.th}>id</th>
            <th className={styles.th}>username</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Subject</th>
            <th className={styles.th}>Message</th>
        </thead>
        <tbody>
            <tr>
                <td className={styles.td}>1</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>1</td>
            </tr>
        </tbody>
    </table>
     
    </div>
  )
}

export default Table

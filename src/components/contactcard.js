import React from "react";
import styles from "@/styles/contactcard.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from '@mui/icons-material/Place';
import { Height } from "@mui/icons-material";

const Contactcard = (params) => {
  const logo = params.logo;

  return (
    <div className={styles.main}>

      <div className={styles.card}>
        <div className={styles["card-border-top"]}></div>
        <div className={styles.img}><PhoneIcon   sx={{fontSize: '74px' }} /></div>
        <span>Contact no.</span>
        <p className={styles.job}>+91 8400921622 </p>
        <button>Monday to Friday</button>
      </div>

      <div className={styles.card}>
        <div className={styles["card-border-top"]}></div>
        <div className={styles.img}><EmailIcon  sx={{fontSize: '74px' }}/></div>
        <span>Email</span>
        <p className={styles.job} >Satyam@empiretechnologies@gmail.com</p>

        <button> www.empiretechnologies.com</button>
      </div>

      <div className={styles.card}>
        <div className={styles["card-border-top"]}></div>
        <div className={styles.img}><PlaceIcon  sx={{fontSize: '74px' }}/></div>
        <span>Location</span>
        <p className={styles.job}>A-60, A Block, Sector 58,</p>
        <button>Noida, Uttar Pradesh 201301</button>
      </div>

    </div>
  );
};

export default Contactcard;

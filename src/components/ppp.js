import React from 'react';
import styles from "@/styles/ppp.module.css";
import TimelineIcon from '@mui/icons-material/Timeline';
import ExploreIcon from '@mui/icons-material/Explore';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const Ppp = (params) => {
  return (
    <div className={styles.ppp}>
      <div className={styles.card}>
        <div className={styles.img}><ExploreIcon sx={{ fontSize: '74px' }}></ExploreIcon></div>
        <span>PASSIONATE</span>
        <p className={styles.info}>Our team's passion for web development fuels exceptional work. Their dedication, enthusiasm, and a can-do attitude are contagious, inspiring them to approach a desire to exceed our clients' expectations. They stay up-to-date on the latest trends and tech, delivering cutting-edge solutions.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.img}><TimelineIcon sx={{ fontSize: '74px' }}></TimelineIcon></div>
        <span>PROFICIENT</span>
        <p className={styles.info}>Our team is a group of highly skilled experts with a deep understanding of web development technologies and best practices. Their proficiency allows them to tackle complex challenges and provide expert guidance to our clients, delivering effective solutions that meet their needs.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.img}><SignalCellularAltIcon sx={{ fontSize: '74px' }}></SignalCellularAltIcon></div>
        <span>PRODUCTIVE</span>
        <p className={styles.info}>Focused on productivity, we work efficiently to deliver projects on time and within budget. Our commitment to optimizing resources, streamlining processes, and reducing downtime allows us to maintain a high level of quality while delivering projects quickly and efficiently, benefiting our clients.</p>
      </div>
    </div>
  );
}

export default Ppp;

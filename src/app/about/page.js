
import React from "react";
import styles from "@/styles/about.module.css"
import Cardclient from "@/components/aboutCard";

const page = () => {
  return (
    <div className={styles.maincard}>
    <div className={styles.image}>
    <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" alt="about"/>
    </div>
    <div className={styles.heading}>
    <h1>ABOUT US</h1>
    </div>
    <hr />


    <div className={styles.whowe}>
      <h1>WHO WE ARE</h1>
      <p>Empire technology Web Services is a company committed to providing world-class services that accelerate the growth and success of their clients. Here at Empires tech we are committed to providing effective solutions with our diverse range of services including Software Development, Payment Gateway Solutions, Web Design And Development, Digital Marketing, Search Engine Optimization,  and Android Apps. The company creates an environment for its employees, a team of experts across various fields who utilize their expertise and vast domain knowledge to accelerate the growth and success of their clients, and who have enough space to work independently.</p>
    </div>
    <hr />


    <div className={styles.cards}>
    <Cardclient name="Satyam Samele" position="CEO"></Cardclient>
    <Cardclient name="Amit Singh" position="President"></Cardclient>
    <Cardclient name="Sachin Chaturvedi" position="CFO"></Cardclient>
   
    </div>
   
 
</div>

   
  );
};

export default page;
